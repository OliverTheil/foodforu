import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = [];

  constructor() {}

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
