export class Withdraw {

    AccountId: number;
    Amount: number;
    TypeTxn: string;

    constructor(accountId : number, amount: number, typeTxn: string){
        this.AccountId = accountId;
        this.Amount= amount;
        this.TypeTxn= typeTxn;
    }

    

}
