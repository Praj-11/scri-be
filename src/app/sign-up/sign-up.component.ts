import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {group} from '@angular/animations';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {errorObject} from 'rxjs/internal-compatibility';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  myForm: FormGroup;
  message = '';
  userError: any;

  constructor(public  fb: FormBuilder) {
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
    const  firstName: string = signupform.value.firstName;
    const  lastName: string = signupform.value.lastName;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        // console.log(response);

        const randomNumber = Math.floor(Math.random() * 1000);

        response.user.updateProfile({
          displayName: firstName + ' ' + lastName,
          photoURL: 'https://api.adorable.io/avatars/' + randomNumber
        }).then(() => {
            this.message = 'You have been signed up sucessfully. Please Login.';
            console.log(this.message);
        });
      }).catch((error) => {
        console.log(error);
        this.userError = error;
    });
  }
}
