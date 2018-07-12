import { PaymentMethodsService } from './../payment-methods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {
  paymentmethods;
  title = 'Payment Methods: ';
  constructor(service : PaymentMethodsService) {
     this.paymentmethods = service.getMethods();
     this.title = (this.paymentmethods as string[]).length + ': '+this.title;
   }
  ngOnInit() {
  }

}
