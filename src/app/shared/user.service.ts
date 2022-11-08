import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tbl_Accounts, tbl_Atmdtls, tbl_TransactionMap, tbl_Transactions, User } from './user.model';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  constructor(private http:HttpClient) {
    
  }
    userUrl: string='https://localhost:44339/api/User'
    accountsUrl: string='https://localhost:44339/api/Accounts'
    transactionMapUrl: string='https://localhost:44339/api/TransactionMap'
    atmUrl: string='https://localhost:44339/api/Atm'
    transactionUrl: string='https://localhost:44339/api/Transactions'

    listUser:User[]=[];
    listAccounts:tbl_Accounts[]=[];
    listTransactionMap:tbl_TransactionMap[]=[];
    listAtm:tbl_Atmdtls[]=[];
    listTransactions:tbl_Transactions[]=[];

    userData:User=new User();
    TranData:tbl_TransactionMap=new tbl_TransactionMap();
    
    saveUser()
    {
      return this.http.post(this.userUrl,this.userData);
    }
    updateUser()
    {
      return this.http.put(`${this.userUrl}/${this.userData.AccountNumber}`,this.userData);
    }
    getUser():Observable<User[]>
    {
        return this.http.get<User[]>(this.userUrl);
    }
    deleteUser(id:number)
    {
        return this.http.delete(`${this.userUrl}/${id}`);
    }
}
