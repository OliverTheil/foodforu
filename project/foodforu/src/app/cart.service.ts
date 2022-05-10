import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartCounter: number = 0;
  public cartPrice: number = 0;
  public cart: any = [];
  constructor() {}

  refreshCartCounter() {
    this.cartCounter = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.cartCounter += this.cart[i]['amount'];
    }
    this.calculatePrice();
  }

  calculatePrice() {
    this.cartPrice = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.cartPrice += this.cart[i]['price'] * this.cart[i]['amount'];
    }
  }

  errorMessage(error: string) {
    Swal.fire({
      position: 'center',
      background: 'rgb(200, 200, 200)',
      icon: 'info',
      title: error,
      heightAuto: false,
      showConfirmButton: false,
      timer: 3000,
    });
  }
}
