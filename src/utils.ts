import { v4 as uuidv4 } from 'uuid';

export const convertTimestampMilliToSeconds = (timestamp: number) => {
    return BigInt(Math.floor(timestamp / 1000));
}

export const getId = (txHash: string, logIndex: number) => {
    return `${txHash}:${logIndex}`;
}

export const getDepositId = () => {
    return uuidv4();
}