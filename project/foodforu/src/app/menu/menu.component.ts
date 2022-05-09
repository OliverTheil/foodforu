import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { Items } from '../models/items.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items = new Items();
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  add(item: any) {
    this.items.cart.push(item);
    console.log(this.items.cart);
    console.log(this.items.cart.length);
  }
}
