import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {rejects} from 'assert';
import {error} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  // tslint:disable-next-line:variable-name
  signup(email: string, password: string, first_name: string, last_name: string){
    return new Promise((resolve, reject) => {

      firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {

        const randomNumber = Math.floor(Math.random() * 1000);

        response.user.updateProfile({
          displayName: first_name + ' ' + last_name,
          photoURL: 'https://api.adorable.io/avatars/' + randomNumber
        }).then(() => {
          resolve(response.user);
        }).catch((error) => {
          reject(error);
        });
      });
    });
  }
}
