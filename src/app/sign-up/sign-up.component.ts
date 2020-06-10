import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import * as firebase from 'firebase';
import 'firebase/firestore'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  myForm: FormGroup;
  message = '';
  userError: any;

  constructor(public  fb: FormBuilder, public authService: AuthService) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.checkIfMatchingPasswords('password', 'confirmPassword')
    });
  }

  checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string) {

    return (group: FormGroup) => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (password.value === confirmPassword.value) {
        return;
      } else {
        confirmPassword.setErrors({
          notEqualToPassword: true
        });
      }
    };
  }

  ngOnInit(): void {
  }

  onSubmit(signupform) {
    const email: string = signupform.value.email;
    const password: string = signupform.value.password;
    const firstName: string = signupform.value.firstName;
    const lastName: string = signupform.value.lastName;

    this.authService.signup(email, password, firstName, lastName).then((user: any) => {

      firebase.firestore().collection("users").doc(user.uid).set({
        firstName: signupform.value.firstName,
        lastName: signupform.value.lastName,
        email: signupform.value.email,
        photoURL: user.photoURL,
        Interests: "",
        bio: "",
        hobbies: ""
      }).then(() => {
        this.message = 'You have been signed up sucessfully. Please Login.';
      })
    }).catch((error) => {
      console.log(error);
      this.userError = error;
    });
  }
}
