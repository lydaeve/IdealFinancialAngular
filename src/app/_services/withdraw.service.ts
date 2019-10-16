import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Withdraw } from '../_models/withdraw';
import { environment } from 'src/environments/environment';
import { Account } from '../_models/account';
import { Options } from 'selenium-webdriver/ie';

@Injectable({ providedIn: 'root' })
export class WithdrawService{
    
    constructor(private http: HttpClient, private withdrawService: WithdrawService) {  }

    addWithdraw(withdraw: Withdraw ){
        const valid = this.http.post<any>(`${environment.apiUrl}/api/transactions`,  withdraw, {responseType: 'json'});
        return valid;
    }

    /*register(user: User) {
        const valid = this.http.post<any>(`${environment.apiUrl}/user/register`, user);
        return valid;
      } */
   
}

