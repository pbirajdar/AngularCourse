import { PaymentMethodService } from './payment-methods/payment-methods.service';
import { PaymentMethods } from './payment-methods/payment-methods.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentMethods
  ],
  imports: [
    BrowserModule
  ],
  providers: [PaymentMethodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
