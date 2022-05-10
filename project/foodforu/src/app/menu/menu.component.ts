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

  ngOnInit(): void {}

  add(item: any) {
    if (this.cartService.cart.length == 0) {
      this.cartService.cart.push(item);
      this.cartService.cart[0]['amount'] = 1;
    } else if (!this.cartService.cart.includes(item)) {
      this.cartService.cart.push(item);
      let number = this.cartService.cart.indexOf(item);
      this.cartService.cart[number]['amount'] = 1;
    } else if (this.cartService.cart.includes(item)) {
      let number = this.cartService.cart.indexOf(item);
      this.cartService.cart[number]['amount'] += 1;
    }
    this.cartService.refreshCartCounter();
  }
}
