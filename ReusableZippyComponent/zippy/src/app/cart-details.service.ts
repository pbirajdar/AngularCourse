import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartDetailsService {
  constructor() { }
  private cartDetails = [
    {itemName:'Item1', price:23.78},
    {itemName:'Item2', price:13.78},
    {itemName:'Item3', price:63.78},
    {itemName:'Item4', price:73.78}
  ];

  getCartDetails(){
    return this.cartDetails;
  }
}
