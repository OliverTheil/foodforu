import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  iconHovered = false;
  activeText = false;
  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  openMenu() {
    if (this.iconHovered == false) {
      this.iconHovered = true;
    } else {
      this.iconHovered = false;
      this.activeText = false;
    }
  }

  showText() {
    if (this.activeText == false) {
      this.activeText = true;
    } else if (this.iconHovered == false) {
      this.activeText = false;
    }
  }
}
