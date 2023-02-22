import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userRef: AngularFirestoreCollection<UserModel>;
  userLoggedIn: boolean;
  userData: any;

  constructor(private router: Router, private afAuth: AngularFireAuth, public afs: AngularFirestore) {
    this.afAuth.authState.subscribe((user)=> {
      this.userLoggedIn = false;

      if(user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
        this.userLoggedIn = true
      }else{
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
        this.userLoggedIn = false
      }
    });
    this.userRef = this.afs.collection<UserModel>('users');
  }

  signupUser(user: any): Promise<any>{
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
    .then((result) => {
      let emailLower = user.email.toLowerCase();
      result.user?.sendEmailVerification();

        const userModel: UserModel = {
        id: result.user?.uid,
        firstName: user.firstName,
        lastName: user.lastName,
        email: emailLower,
        password: user.password,
        address: user.address,
        city: user.city,
        zipCode: user.zipCode,
        about: user.about,
        role: user.role,
        phone: user?.phone,
        helps: user.helps,
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

  loginUser(email: string, password: string): Promise<any>{
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.SetUserData(result.user)
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

  SetUserData(user:any){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    return this.userRef.add(user);
  }
}
