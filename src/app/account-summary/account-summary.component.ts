import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Account } from '../_models/account';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  accountId: number;
  public account: Account;
  
  constructor( private accountService: AccountService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.accountId = +this.route.snapshot.paramMap.get('id');
    this.getAccount();
    //console.log("acc = " + acc);
  }

  getAccount(): void {

    this.accountService.getAccount(this.accountId).subscribe(account => {
      this.account = account;
      console.log(this.account);
      return this.account;
    });
  }

}
