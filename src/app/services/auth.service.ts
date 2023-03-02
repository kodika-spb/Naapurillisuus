import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

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
  signupUser(user: any): Promise<any> {
    return this.afAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        let emailLower = user.email.toLowerCase();
        result.user?.sendEmailVerification();
      })
      .catch((error) => {
        console.log('Auth Service: signup error', error);
       /*  if (error.code) {
          return (alert('Ooops..The email address is already in use by another account.'));
        } */
        return error.message;
      });
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





/* 
loginUser(email: string, password: string): Promise<any> {
  return this.afAuth
    .signInWithEmailAndPassword(email, password)
    .then((userCredentials: any) => {
     this.user = userCredentials.user
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
 */