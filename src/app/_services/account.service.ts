import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../_models/account';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountService{
    
    constructor(private http: HttpClient, private acccountService: AccountService) {  }

    getAccount( id: number){
        const acc = this.http.get<Account>(`${environment.apiUrl}/api/accounts/${id}`);
        console.log(acc);
        return acc;
    }
    
    
}
