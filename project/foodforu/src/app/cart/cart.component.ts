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
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  plus(i: number) {
    this.items.cart[i].amount += 1;
  }

  minus(i: number) {
    if (this.items.cart[i].amount > 1) {
      this.items.cart[i].amount -= 1;
    } else {
      console.log(this.items.cart[i]);
    }
  }

  orderFood() {
    this.cartService.errorMessage('Sorry, but there is no food :(');
  }
}
