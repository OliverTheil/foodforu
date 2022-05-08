import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
