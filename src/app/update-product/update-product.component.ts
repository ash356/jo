import { Component } from '@angular/core';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../models/products';
import { DataBaseService } from '../services/data-base.service';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent {
  productid: any;
  product: Products = {};
  constructor(
    private fire: Firestore,
    private db: DataBaseService,
    private ar: ActivatedRoute,
    private router: Router,
    public nav: NavbarService
  ) {
    this.productid = this.productid = this.ar.snapshot.params['id'];
    this.db.getProduct(this.productid).subscribe((data) => {
      this.product = data as object;
    });
    this.nav.show();
  }
  updateProduct(value: any) {
    let ref = doc(this.fire, 'products/' + this.productid);
    return setDoc(ref, this.product)
      .then(() => {
        alert('Updated Successfully');
        this.router.navigate(['/products']);
      })
      .catch((err) => {
        alert(err.message);
      });

  }
  // updateProduct(form:NgForm){
  //   this.db.updateProduct(this.productid ,form.value)
  // }
  onCancel() {
    this.router.navigate(['/products']);
  }
}
