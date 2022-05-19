import { Component, OnInit } from '@angular/core';
import {
  collectionData,
  deleteField,
  doc,
  Firestore,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection, setDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Products } from '../models/products';
import { DataBaseService } from '../services/data-base.service';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-filteration',
  templateUrl: './filteration.component.html',
  styleUrls: ['./filteration.component.css'],
})
export class FilterationComponent {
  sho: boolean = true;
  hid: boolean = false;
  data: Products[] = [];
  products: Products[] = [];
  fruitProducts: Products[] = [];
  vegetableProducts: Products[] = [];
  nonValidProducts: Products[] = [];
  constructor(
    private db: DataBaseService,
    private fire: Firestore,
    public nav: NavbarService,
    private router:Router
  ) {
    this.db.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
    this.nav.show();
  }
  filter() {
    for (let i in this.products) {
      // if (this.products[i].status == 'Not Valid') {
      const q = query(
        collection(this.fire, 'products'),
        where('type', '==', 'Fruit')
      );
      getDocs(q).then((response) => {
        console.log(
          response.docs.map((item) => {
            return { ...item.data(), id: item.id };
          })
        );
        this.fruitProducts = [
          ...response.docs.map((item) => {
            return { ...item.data(), id: item.id };
          }),
        ];
      });
      const q1 = query(
        collection(this.fire, 'products'),
        where('type', '==', 'Vegetable')
      );
      getDocs(q1).then((response) => {
        console.log(
          response.docs.map((item) => {
            return { ...item.data(), id: item.id };
          })
        );
        this.vegetableProducts = [
          ...response.docs.map((item) => {
            return { ...item.data(), id: item.id };
          }),
        ];
      });
      const q2 = query(
        collection(this.fire, 'products'),
        where('status', '==', 'Not Valid')
      );
      getDocs(q2).then((response) => {
        console.log(
          response.docs.map((item) => {
            return { ...item.data(), id: item.id };
          })
        );
        this.nonValidProducts = [
          ...response.docs.map((item) => {
            return { ...item.data(), id: item.id };
          }),
        ];
      });
      //   const cityRef = doc(this.fire, 'products',("Not Valid"))
      //   updateDoc(cityRef, {
      //     capital: deleteField()
      // })
      // }
    }
    this.sho = false;
    this.hid = true;
  }
  deleteProduct(productid: any) {
    this.db
      .deleteProduct(productid)
      .then(() => {})
      .catch(() => {});
      this.sho = true;
      this.hid = false;
      // this.router.navigate(['/products'])
  }
  reset(){
    this.sho = true;
    this.hid = false;
  }
}
