export class User {
    AccountNumber:number;
    FirstName:string;
    MiddleName:string;
    LastName:string;
    UserName:string;
    Password:string;
    SequrityQuestion:string;
    SecurityAnswer:string;
    AccTypeId:number;
    AccType: string;
    MobileNumber: number;
    Amount: number
}
export class tbl_Accounts{
    AccTypeId:number;
    AccType:string
}
export class tbl_TransactionMap{
    TranTypeId:number;
    TranType:string
}

export class tbl_Atmdtls{
    Id:number;
    AccountNumber:number;
    Atmpin: number
}

export class tbl_Transactions{
    TransactionId:number;
    AccountNumber:number;
    AccTypeId:number;
    AccType:string;
    TranTypeId:number;
    TranType:string;
    TranDate: any;
    Amount: number;
}
