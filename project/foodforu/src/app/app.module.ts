import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { BodyComponent } from './body/body.component';
import { ItemComponent } from './item/item.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    BodyComponent,
    ItemComponent,
    LandingpageComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    ImprintComponent,
    DataprotectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
