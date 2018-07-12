import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodsService {

  constructor() { }

  getMethods() {
    return ['Net-Banking', 'Credit Card', 'Debit Card','Cash On Delevery']; 
  }
}
