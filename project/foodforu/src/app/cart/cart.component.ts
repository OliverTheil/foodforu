import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { Items } from '../models/items.class';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items = new Items();
  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.cartService.getCart();
    this.cartService.refreshCartCounter();
  }

  plus(i: number) {
    this.cartService.cart[i].amount += 1;
    this.cartService.refreshCartCounter();
  }

  minus(i: number) {
    if (this.cartService.cart[i].amount > 1) {
      this.cartService.cart[i].amount -= 1;
    } else {
      this.cartService.cart.splice(i, 1);
    }
    this.cartService.refreshCartCounter();
  }

  orderFood() {
    this.cartService.errorMessage('Sorry, but there is no food :(');
  }
}
