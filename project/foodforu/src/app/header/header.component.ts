import { Component, OnInit } from '@angular/core';
import { Items } from '../models/items.class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items = new Items();
  iconHovered = false;
  activeText = false;
  constructor() {}

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
