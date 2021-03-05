export class OrderResponse {
    transactionId : number;
    orderType: string;
    timestamp: Date;
    assetSymbol: string;
    assetAmount: number;
    assetPrice: number;
    cashAmount: number;
    assetBalance: number;
    cashBalance: number;
}
