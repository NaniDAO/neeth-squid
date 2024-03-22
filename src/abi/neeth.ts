import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './neeth.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, spender: string, amount: bigint] & {owner: string, spender: string, amount: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    Transfer: new LogEvent<([from: string, to: string, amount: bigint] & {from: string, to: string, amount: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    DOMAIN_SEPARATOR: new Func<[], {}, string>(
        abi, '0x3644e515'
    ),
    addStake: new Func<[old: boolean, unstakeDelaySec: number], {old: boolean, unstakeDelaySec: number}, []>(
        abi, '0x8bf2a227'
    ),
    allowance: new Func<[owner: string, spender: string], {owner: string, spender: string}, bigint>(
        abi, '0xdd62ed3e'
    ),
    approve: new Func<[spender: string, amount: bigint], {spender: string, amount: bigint}, boolean>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, bigint>(
        abi, '0x70a08231'
    ),
    daoFee: new Func<[], {}, bigint>(
        abi, '0x2957b839'
    ),
    decimals: new Func<[], {}, number>(
        abi, '0x313ce567'
    ),
    deposit: new Func<[], {}, bigint>(
        abi, '0xd0e30db0'
    ),
    depositTo: new Func<[to: string], {to: string}, bigint>(
        abi, '0xb760faf9'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    nonces: new Func<[owner: string], {owner: string}, bigint>(
        abi, '0x7ecebe00'
    ),
    permit: new Func<[owner: string, spender: string, value: bigint, deadline: bigint, v: number, r: string, s: string], {owner: string, spender: string, value: bigint, deadline: bigint, v: number, r: string, s: string}, []>(
        abi, '0xd505accf'
    ),
    'postOp(uint8,bytes,uint256,uint256)': new Func<[_: number, context: string, actualGasCost: bigint, actualUserOpFeePerGas: bigint], {context: string, actualGasCost: bigint, actualUserOpFeePerGas: bigint}, []>(
        abi, '0x7c627b21'
    ),
    'postOp(uint8,bytes,uint256)': new Func<[_: number, context: string, actualGasCost: bigint], {context: string, actualGasCost: bigint}, []>(
        abi, '0xa9a23409'
    ),
    setFee: new Func<[_daoFee: bigint], {_daoFee: bigint}, []>(
        abi, '0x3687f24a'
    ),
    setPostOpCost: new Func<[postOpCost: bigint], {postOpCost: bigint}, []>(
        abi, '0x1741cba5'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    totalSupply: new Func<[], {}, bigint>(
        abi, '0x18160ddd'
    ),
    transfer: new Func<[to: string, amount: bigint], {to: string, amount: bigint}, boolean>(
        abi, '0xa9059cbb'
    ),
    transferFrom: new Func<[from: string, to: string, amount: bigint], {from: string, to: string, amount: bigint}, boolean>(
        abi, '0x23b872dd'
    ),
    unlockStake: new Func<[old: boolean], {old: boolean}, []>(
        abi, '0xd0b6672e'
    ),
    'validatePaymasterUserOp((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes),bytes32,uint256)': new Func<[userOp: ([sender: string, nonce: bigint, initCode: string, callData: string, accountGasLimits: string, preVerificationGas: bigint, gasFees: string, paymasterAndData: string, signature: string] & {sender: string, nonce: bigint, initCode: string, callData: string, accountGasLimits: string, preVerificationGas: bigint, gasFees: string, paymasterAndData: string, signature: string}), _: string, maxCost: bigint], {userOp: ([sender: string, nonce: bigint, initCode: string, callData: string, accountGasLimits: string, preVerificationGas: bigint, gasFees: string, paymasterAndData: string, signature: string] & {sender: string, nonce: bigint, initCode: string, callData: string, accountGasLimits: string, preVerificationGas: bigint, gasFees: string, paymasterAndData: string, signature: string}), maxCost: bigint}, [_: string, _: bigint]>(
        abi, '0x52b7512c'
    ),
    'validatePaymasterUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)': new Func<[userOp: ([sender: string, nonce: bigint, initCode: string, callData: string, callGasLimit: bigint, verificationGasLimit: bigint, preVerificationGas: bigint, maxFeePerGas: bigint, maxPriorityFeePerGas: bigint, paymasterAndData: string, signature: string] & {sender: string, nonce: bigint, initCode: string, callData: string, callGasLimit: bigint, verificationGasLimit: bigint, preVerificationGas: bigint, maxFeePerGas: bigint, maxPriorityFeePerGas: bigint, paymasterAndData: string, signature: string}), _: string, maxCost: bigint], {userOp: ([sender: string, nonce: bigint, initCode: string, callData: string, callGasLimit: bigint, verificationGasLimit: bigint, preVerificationGas: bigint, maxFeePerGas: bigint, maxPriorityFeePerGas: bigint, paymasterAndData: string, signature: string] & {sender: string, nonce: bigint, initCode: string, callData: string, callGasLimit: bigint, verificationGasLimit: bigint, preVerificationGas: bigint, maxFeePerGas: bigint, maxPriorityFeePerGas: bigint, paymasterAndData: string, signature: string}), maxCost: bigint}, [_: string, _: bigint]>(
        abi, '0xf465c77e'
    ),
    withdraw: new Func<[amount: bigint], {amount: bigint}, []>(
        abi, '0x2e1a7d4d'
    ),
    withdrawFrom: new Func<[from: string, to: string, amount: bigint], {from: string, to: string, amount: bigint}, []>(
        abi, '0x9555a942'
    ),
    withdrawStake: new Func<[old: boolean, withdrawAddress: string], {old: boolean, withdrawAddress: string}, []>(
        abi, '0x375b9a74'
    ),
    withdrawTo: new Func<[old: boolean, withdrawAddress: string, withdrawAmount: bigint], {old: boolean, withdrawAddress: string, withdrawAmount: bigint}, []>(
        abi, '0x115e4f4b'
    ),
}

export class Contract extends ContractBase {

    DOMAIN_SEPARATOR(): Promise<string> {
        return this.eth_call(functions.DOMAIN_SEPARATOR, [])
    }

    allowance(owner: string, spender: string): Promise<bigint> {
        return this.eth_call(functions.allowance, [owner, spender])
    }

    balanceOf(owner: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    daoFee(): Promise<bigint> {
        return this.eth_call(functions.daoFee, [])
    }

    decimals(): Promise<number> {
        return this.eth_call(functions.decimals, [])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    nonces(owner: string): Promise<bigint> {
        return this.eth_call(functions.nonces, [owner])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    totalSupply(): Promise<bigint> {
        return this.eth_call(functions.totalSupply, [])
    }
}
