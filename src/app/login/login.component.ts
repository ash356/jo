import { Component, OnInit } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: Auth ,private router:Router,private nav:NavbarService) {
    this.nav.hide();

  }
  onLogIn(value: any) {
    signInWithEmailAndPassword(this.auth, value.email, value.password)
      .then((response: any) => {
        console.log(response.user);
        // alert('Successfully SignUp');
        this.router.navigate(['/home'])
      })
      .catch((err) => {
        alert(err.message);
      });

  }


}
