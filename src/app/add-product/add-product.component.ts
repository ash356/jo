import { Component, OnInit } from '@angular/core';
import {
  addDoc,
  collection,
  DocumentReference,
  Firestore,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DataBaseService } from '../services/data-base.service';
import { FileUploadService } from '../services/file-upload.service';
import { NavbarService } from '../services/navbar.service';
// import {
//   Storage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from '@angular/fire/storage';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent   implements OnInit{
   // Variable to store shortLink from api response
   shortLink: string = "";
   loading: boolean = false; // Flag variable
   file?: File; // Variable to store file
   selectedFile?: File
  constructor(
    private router: Router,
    private fire: Firestore,
    private db: DataBaseService,
    public nav: NavbarService,
    private fileUploadService:FileUploadService
    // private storage: Storage
    // private storage:Storage
  ) {
  }
  ngOnInit() {
    this.nav.show();

  }
  addProduct(value: any) {
    const dbInstance = collection(this.fire, 'products');
    addDoc(dbInstance, value)
      .then(() => {
        // alert('Data Sent Successfully');
        this.router.navigate(['/products']);
        // this.getData();
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  //   addProduct(form: NgForm) {
  //     this.db.addProduct(form.value)
  // }
  onCancel() {
    this.router.navigate(['/products']);
  }


  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0]
  }
  onUpload(){
    // this.http.post('my-backend.com/file-upload', uploadData, {
    //   reportProgress: true,
    //   observe: 'events'
    // })
    //   .subscribe(event => {
    //     console.log(event); // handle event here
    //   });
  }

  // chooseFile(event: any) {
  //   this.file = event.target.files[0];
  // }
  // addFile() {
  //   const storageRef = ref(this.storage, 'images/'+this.file.name);
  //   const uploadTask = uploadBytesResumable(storageRef,this.file);
  //   uploadTask.on('state_changed', (snapshot)=> {
  //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     console.log('Upload is ' + progress + '% done');
  //   },() => {
  //        // Upload completed successfully, now we can get the download URL
  //        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //        console.log('File available at', downloadURL);
  //         });
  //   }
  //   )
  // }
}
