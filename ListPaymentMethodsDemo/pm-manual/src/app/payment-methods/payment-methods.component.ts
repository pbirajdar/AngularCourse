import { PaymentMethodService } from './payment-methods.service';
import { Component } from "@angular/core";

@Component({
    selector : 'pmethods',
    template : `
        <h1>{{title}}</h1>
        <button *ngFor="let method of methods" class="btn btn-danger" [class.active] = "isActive">{{method}}</button>
    `
})
export class PaymentMethods {
    title = 'Payment Methods';
    isActive = false;
    methods;
    constructor(service:PaymentMethodService){
        this.methods = service.getMethods();
    }
}