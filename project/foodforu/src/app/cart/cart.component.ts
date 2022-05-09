import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  orderFood() {
    this.cartService.errorMessage('Sorry, but there is no food :(');
  }
}
