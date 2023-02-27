import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userLoggedIn: boolean;

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.userLoggedIn = false;

    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    });
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  signupUser(user: any): Promise<any>{
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
    .then((result) => {
      let emailLower = user.email.toLowerCase();
      result.user?.sendEmailVerification();

        const userModel: User = {
        uid: user.uid,
        firstName: user.firstName,
        lastName: user.lastName,
        email: emailLower,
        password: user.password,
        address: user.address,
        city: user.city,
        zip: user.zip,
        about: user.about,
        role: user.role,
        phoneNumber: user?.phone,
        displayName: user.email,
        photoURL: user.photoURL,
        providerId: user.providerId, 
      }
      this.SetUserData(userModel)
    })
    .catch(error => {
      console.log('Auth Service: signup error', error);
      if(error.code){
        return { isValid: false, message: error.message };
      }
      return error.message;
    });
  }

  SetUserData(user:any){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    return this.userRef.add(user);
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Auth service: loginUser: success');
      })
      .catch((error) => {
        console.log('Auth service: login error...');
        console.log('error code', error.code);
        console.log('error', error);
        if (error.code) return { isValid: false, message: error.message };
        return error.message;
      });

  }
}
