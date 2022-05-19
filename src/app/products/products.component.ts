import { Component, OnInit } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Products } from '../models/products';
import { DataBaseService } from '../services/data-base.service';
import { NavbarService } from '../services/navbar.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Products[] = [];
  constructor(
    private db: DataBaseService,
    private fire: Firestore,
    public nav: NavbarService
  ) {
    this.db.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
    this.nav.show();
  }

  // addProduct(value: any) {
  //     const dbInstance = collection(this.fire, 'products');
  //     addDoc(dbInstance, value)
  //       .then(() => {
  //         alert('Data Sent Successfully');
  //         this.getData();
  //       })
  //       .catch((err) => {
  //         alert(err.message);
  //       });
  //   }
  //   getData() {
  //       const dbInstance = collection(this.fire, 'products');
  //       getDocs(dbInstance).then((response) => {
  //         console.log(
  //           response.docs.map((item) => {
  //             return { ...item.data(), id: item.id };
  //           })
  //         );
  //         this.data = [
  //           ...response.docs.map((item) => {
  //             return { ...item.data(), id: item.id };
  //           }),
  //         ];
  //       });

  //     }
  deleteProduct(productid: any) {
    this.db
      .deleteProduct(productid)
      .then(() => {})
      .catch(() => {});
  }


}
