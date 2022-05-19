import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NotesComponent } from './notes/notes.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FilterationComponent } from './filteration/filteration.component';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { FruveComponent } from './fruve/fruve.component';
import { NavbarService } from './services/navbar.service';
import {HttpClientModule} from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';
const routes = [
  { path: '', component: FruveComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: 'filteration', component: FilterationComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: LoginComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NotesComponent,
    SignupComponent,
    LoginComponent,
    AddProductComponent,
    UpdateProductComponent,
    FilterationComponent,
    FruveComponent,
    DeleteComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule, HttpClientModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
