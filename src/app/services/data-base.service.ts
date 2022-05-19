
import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  DocumentReference,
  collectionData,
  docData,
  setDoc,
} from '@angular/fire/firestore';
import { where , query} from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Products } from '../models/products';
@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor( private fire: Firestore) {

  }
  // addProduct(product:Products)
  // {
  //   let $productsRef=collection(this.fire,"products");
  //   addDoc($productsRef,product)
  //   .then(()=>{
  //     alert("data.id");
  //     // this.router.navigate(['/']);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   });
  // }

  getProducts(){
    let ref = collection(this.fire,"products")
    return collectionData(ref,{idField:"id"}) as Observable<Products[]>
  }

  getProduct(id:string){
    let ref = doc(this.fire,"products/"+id)
    return docData(ref,{idField:"id"}) as Observable<Products[]>
  }
  // updateProduct(id:string,product:Products){
  //   let ref = doc(this.fire,"products/"+id)
  //   return setDoc(ref,product)
  // }
  deleteProduct(id:string){
    let ref = doc(this.fire ,"products/" +id)
    return deleteDoc(ref);

  }
  deletenonProduct(status:string){
    const q = query(collection(this.fire, "products"), where("status", "==", "Not Valid"));
    let ref = doc(this.fire ,"products/" +status)
    return deleteDoc(ref);

  }
}
