import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidthdrawFormComponent } from './widthdraw-form/widthdraw-form.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component'
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'account/:id/transactions', component: WidthdrawFormComponent },
  { path: 'account/:id', component: AccountSummaryComponent},
  { path: 'user/:id', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
