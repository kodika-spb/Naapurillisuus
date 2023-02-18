import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn: boolean;
  userData: any;

  constructor(private router: Router, private afAuth: AngularFireAuth, public afs: AngularFirestore) {
    this.afAuth.authState.subscribe((user)=> {
      if(user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      }else{
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!)
      }
    });
  }

  ngOnInit():void{
    this.userLoggedIn = false;

    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    });
  }

  signupUser(user: any): Promise<any>{
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
    .then((result) => {
      let emeilLower = user.email.toLowerCase();
      result.user?.sendEmailVerification();
    })
    .catch(error => {
      console.log('Auth Service: signup error', error);
      if(error.code){
        return { isValid: false, message: error.message };
      }
      return error.message;
    });
  }

  loginUser(email: string, password: string): Promise<any>{
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Auth service: loginUser: success');
    })
    .catch(error => {
      console.log('Auth service: login error...');
      console.log('error code', error.code);
      console.log('error', error);
      if (error.code)
      return {isValid: false, message: error.message };
      return error.message;
    });
  }
}
