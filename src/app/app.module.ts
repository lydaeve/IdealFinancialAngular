import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { WidthdrawFormComponent } from './widthdraw-form/widthdraw-form.component';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './material-module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { NumbersOnlyDirective } from './helpers/directives/numers-only.directive';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccountSummaryComponent,
    WidthdrawFormComponent,
    NumbersOnlyDirective,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,   
    FormsModule,
    CustomMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
