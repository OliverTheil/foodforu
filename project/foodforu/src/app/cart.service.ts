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
  public discountCode: string = '';
  public cart: any = [];
  constructor() {}

  getCart() {
    if (localStorage.getItem('cart') === null) {
      let emptyCart = this.cart;
      localStorage.setItem('cart', JSON.stringify(emptyCart));
    } else {
      let existingCart: any = localStorage.getItem('cart');
      this.cart = JSON.parse(existingCart);
    }
  }

  saveCart() {
    let plan = this.cart;
    localStorage.setItem('cart', JSON.stringify(plan));
  }

  refreshCartCounter() {
    this.cartCounter = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.cartCounter += this.cart[i]['amount'];
    }
    this.calculatePrice();
    this.saveCart();
  }

  calculatePrice() {
    this.cartPrice = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.cartPrice += this.cart[i]['price'] * this.cart[i]['amount'];
    }
    if (this.discountCode == 'ilovecoding') {
      this.cartPrice = this.cartPrice * 0.85;
    }
  }

  onChangeEvent(event: any) {
    this.discountCode = event.target.value;
  }

  errorMessage(error: string) {
    Swal.fire({
      position: 'center',
      background: 'rgb(200, 200, 200)',
      icon: 'info',
      title: error,
      heightAuto: false,
      showConfirmButton: false,
      timer: 4000,
    });
  }
}
