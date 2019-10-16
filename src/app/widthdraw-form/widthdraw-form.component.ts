import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WithdrawService } from 'src/app/_services/withdraw.service';
import { inputValidators } from 'src/app/helpers/inputValidator';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Withdraw } from '../_models/withdraw';
import {Router, ActivatedRoute} from '@angular/router';
import { ErrorInterceptor } from '../helpers/error.interceptor';


@Component({
  selector: 'app-widthdraw-form',
  templateUrl: './widthdraw-form.component.html',
  styleUrls: ['./widthdraw-form.component.css']
})
export class WidthdrawFormComponent implements OnInit {

  error='';
  form = new FormGroup({
    amount: new FormControl('',
    [
      Validators.required,
      inputValidators.cannotBeBlank,
      inputValidators.cannotContainSpecialCharacters
    ])
  }, {updateOn: 'blur'});

  constructor(private withdrawService : WithdrawService, private route: ActivatedRoute , private location: Location,private router: Router ) { }
  accountId: number;
  public withdraw: Withdraw;
  successAdd = false;  
  returnUrl: string;
  errorAdd = false;

  ngOnInit() {
    this.accountId = +this.route.snapshot.paramMap.get('id');
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || `account/${this.accountId}`;
  }
 
  get formfields() { return this.form.controls; }
  


 get amount(){
    return this.formGet('amount');
  }

  formGet(name: string) {
    return this.form.get(name);
  } 

  addWithdraw(): void {
    //var am = this.amount;
    console.log(this.form.value);
    console.log("im here");
  
    
    let withdraw2: Withdraw = {
        AccountId: this.accountId,
        Amount: this.formfields.amount.value,
        TypeTxn: "Withdraw"
    }

    this.withdrawService.addWithdraw(withdraw2).pipe(first()).subscribe(
          
      valid => {
       // 
        //console.log('i am here before the if');
       if (valid === 'Transaction created successfully') {
        this.successAdd = true;
         console.log('i am here in the addwithdraw');
        // this.goBack();
        this.router.navigate([this.returnUrl]);
       }
      },
      error => {        
        this.error = error;
        this.errorAdd = true;
        console.log(this.error + "in errrors");
      });
  }

  getErrorMessage(){
    var result="";
    result = this.amount.hasError('required') ? 'You must enter a value' :
             this.amount.hasError('cannotBeBlank') ? 'Can not have empty spaces':
             this.amount.hasError('cannotContainSpecialCharacters') ? 'Can not contain special characters':
             '';
             ;
             return result;
  }
  closeSuccessAdd() {
    this.successAdd = false;
  }
  
  goBack() {
    return this.location.back();
  }
}

/*register(): void {
  // Must make a call to server to see if input is valid
  this.userService.register(this.form.value).pipe(first()).subscribe(
  valid => {
    if (valid === 'User register successfully') {
      this.goBack();
    }
  },
  error => {
    this.errors = error;
  });
} */