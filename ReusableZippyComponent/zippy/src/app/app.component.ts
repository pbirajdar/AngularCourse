import { CartDetailsService } from './cart-details.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private cartDetailsService:CartDetailsService){

  }
  cartDetails = this.cartDetailsService.getCartDetails();
  
}
