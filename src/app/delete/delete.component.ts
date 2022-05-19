import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { DataBaseService } from '../services/data-base.service';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent{
  products: Products[] = [];
  constructor(
    private db: DataBaseService,
    public nav: NavbarService
  ) {
    this.db.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
    this.nav.show();
  }
  deleteProduct(productid: any) {
    this.db
      .deleteProduct(productid)
      .then(() => {})
      .catch(() => {});
  }



}
