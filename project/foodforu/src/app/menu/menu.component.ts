import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { Items } from '../models/items.class';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items = new Items();
  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getCart();
    this.cartService.refreshCartCounter();
  }

  add(item: any) {
    let cart = this.cartService.cart;

    if (cart.length == 0) {
      cart.push(item);
      cart[0]['amount'] = 1;
    } else if (!cart.includes(item)) {
      cart.push(item);
      let number = cart.indexOf(item);
      cart[number]['amount'] = 1;
    } else if (cart.includes(item)) {
      let number = cart.indexOf(item);
      cart[number]['amount'] += 1;
    }

    this.cartService.refreshCartCounter();
  }
}
