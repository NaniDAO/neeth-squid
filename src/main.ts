import { TypeormDatabase } from '@subsquid/typeorm-store'
import { Approval, Deposit, Transfer } from './model'
import { processor } from './processor'
import { abi, events, functions } from './abi/neeth'
import { convertTimestampMilliToSeconds, getDepositId, getId } from './utils'
import { NEETH_ADDRESS } from './constants'

processor.run(new TypeormDatabase({ supportHotBlocks: true, stateSchema: 'processor' }), async (ctx) => {
  const approvals: Approval[] = []
  const transfers: Transfer[] = [] 
  const deposits: Deposit[] = []

  for (let c of ctx.blocks) {
    for (let log of c.logs) {
        if (log.address.toLowerCase() !== NEETH_ADDRESS.toLowerCase()) break;
        const transaction = log.transaction || log.getTransaction()
        if (log.topics[0].toLowerCase() === events.Approval.topic.toLowerCase()) {
          const data = events.Approval.decode(log)
          approvals.push(
            new Approval({
              id: getId(transaction.hash, log.logIndex),
              owner: data.owner,
              spender: data.spender,
              amount: data.amount,
              txHash: transaction.hash,
              timestamp: convertTimestampMilliToSeconds(c.header.timestamp),
            })
          )
        } else if (log.topics[0].toLowerCase() === events.Transfer.topic.toLowerCase()) {
          const data = events.Transfer.decode(log)
          transfers.push(
            new Transfer({
              id: getId(transaction.hash, log.logIndex),
              timestamp: convertTimestampMilliToSeconds(c.header.timestamp),
              from: data.from,
              to: data.to,
              amount: data.amount,
              txHash: transaction.hash,
            })
          )
      }
    }

    for (let trace of c.traces) {
        if (trace.type !== "call") break;
        const { to, from, input, sighash, value } = trace.action;
        if (to.toLowerCase() !== NEETH_ADDRESS.toLowerCase()) break;

        if (sighash === functions.depositTo.sighash) {
          const data = functions.depositTo.decode(input)
          ctx.log.info(`Processing Depsit to ${data.to} and value ${value}`)
          const transaction = trace.transaction || trace.getTransaction()

          deposits.push(
            new Deposit({
              id: getDepositId(),
              depositor: from,
              account: data.to,
              amount: value,
              txHash: transaction.hash, 
              timestamp: convertTimestampMilliToSeconds(c.header.timestamp),
            })
          )
        }
    }
  }

  const startBlock = ctx.blocks.at(0)?.header.height
  const endBlock = ctx.blocks.at(-1)?.header.height

  ctx.log.info(`Processed ${approvals.length} Approval, ${transfers.length} Transfer and ${deposits.length} Deposit events from block ${startBlock} to ${endBlock}`)

  await ctx.store.upsert(deposits)
  await ctx.store.upsert(approvals)
  await ctx.store.upsert(transfers)
})