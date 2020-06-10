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
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import {NgxTextEditorModule} from 'ngx-text-editor';
import  {AngularEditorModule} from '@kolkov/angular-editor';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

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
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
   ],
    imports: [
        BrowserModule,
        FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      NgxTextEditorModule,
      HttpClientModule,
      AngularEditorModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
