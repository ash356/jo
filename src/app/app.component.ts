import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Products } from './models/products';
import { DataBaseService } from './services/data-base.service';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';
  products: Products[] = [];
  constructor(public nav:NavbarService){
    this.nav.hide();

  }

}

