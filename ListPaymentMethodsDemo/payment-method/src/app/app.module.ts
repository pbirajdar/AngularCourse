import { PaymentMethodsService } from './payment-methods.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentMethodsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PaymentMethodsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
