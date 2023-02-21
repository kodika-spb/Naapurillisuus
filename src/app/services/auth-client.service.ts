import { Injectable, NgZone } from '@angular/core';
import { User } from '../models/users';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  clientData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((client) => {
      if (client) {
        this.clientData = client;
        localStorage.setItem('client', JSON.stringify(this.clientData));
        JSON.parse(localStorage.getItem('client')!);
      } else {
        localStorage.setItem('client', 'null');
        JSON.parse(localStorage.getItem('client')!);
      }
    });
  }
  // Sign in with email/password
/*   SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe((client) => {
          if (client) {
            this.router.navigate(['client-tasks']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  } */
  // Sign up with email/password
  SignUp(user: any) {
    return this.afAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        result.user?.sendEmailVerification();
        
        this.SetUserData({...user, ...result.user});
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const client = JSON.parse(localStorage.getItem('client')!);
    return client !== null && client.emailVerified !== false ? true : false;
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(client: any) {
    const clientRef: AngularFirestoreDocument<any> = this.afs.doc(
      `clients/${client.uid}`
    );
    return clientRef.set(client, {
      merge: true,
    });
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('client');
      this.router.navigate(['sign-in']);
    });
  }
}

// Send email verfificaiton when new user sign up
/*   SendVerificationMail() {
    return this.afAuth.currentUser
      .then((c: any) => c.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  } */
// Reset Forggot password
/*  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  } */

/*  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['dashboard']);
    });
  } */
// Auth logic to run auth providers
/*  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['dashboard']);
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  } */
