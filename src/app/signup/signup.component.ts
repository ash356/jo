import { Component, OnInit } from '@angular/core';
import {Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,} from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // password = "secret";
  show = false;
  constructor(private auth:Auth , private router:Router) { }
  onSubmit(value:any){
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
    .then((response: any) => {
      console.log(response.user)
      alert('Successfully SignUp');
      this.router.navigate(['/signin']);
    })
    .catch((err) => {
      alert(err.message)
    });

}

toggleShow()
    {
      this.show = !this.show;
    }
  }
