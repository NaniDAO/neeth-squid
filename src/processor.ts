import {assertNotNull} from '@subsquid/util-internal'
import {lookupArchive} from '@subsquid/archive-registry'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'
import { NEETH_ADDRESS } from './constants'
import * as neeth from './abi/neeth';

export const chain = 'arbitrum';

export const processor = new EvmBatchProcessor()
    // Lookup archive by the network name in Subsquid registry
    // See https://docs.subsquid.io/evm-indexing/supported-networks/
    .setGateway(lookupArchive(chain))
    // Chain RPC endpoint is required for
    //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
    //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
    .setRpcEndpoint({
        // set RPC endpoint in .env
        url: assertNotNull(process.env.RPC_ARBITRUM_ONE_HTTP, 'RPC_ARBITRUM_ONE_HTTP is not set'),
        rateLimit: 10
    })
    .setFinalityConfirmation(75)
    .setBlockRange({
        from: 190629816,
    })
    .setFields({
        transaction: {
            from: true,
            value: true,
            hash: true,
        },
        trace: {
            callFrom: true,
            callTo: true,
            callInput: true,
            callValue: true,
            callSighash: true,
        }
    })
    .addLog({
        address: [NEETH_ADDRESS],
        topic0: [
            neeth.events.Approval.topic,
            neeth.events.Transfer.topic
        ],
        transaction: true,
    })
    .addTrace({
        type: ['call'],
        callTo: [NEETH_ADDRESS],
        callSighash: [
            neeth.functions.depositTo.sighash
        ],
        transaction: true,
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Context = DataHandlerContext<Store, Fields>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
  
