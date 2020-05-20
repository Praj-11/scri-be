import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';

const firebaseConfig = {
  apiKey: 'AIzaSyBhhg5GCyxgclRrl07jy_VppbXuEqwoCxc',
  authDomain: 'scribe-4ad9f.firebaseapp.com',
  databaseURL: 'https://scribe-4ad9f.firebaseio.com',
  projectId: 'scribe-4ad9f',
  storageBucket: 'scribe-4ad9f.appspot.com',
  messagingSenderId: '554837345460',
  appId: '1:554837345460:web:196ecfef25df8381bb43e1',
  measurementId: 'G-QC5F0XYF0K'
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
   ],
    imports: [
        BrowserModule,
        FormsModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
