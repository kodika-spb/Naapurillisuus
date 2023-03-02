import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { collection, Firestore } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { authInstance$ } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>; 

  constructor(private firestore: Firestore, private afs: AngularFirestore) {
  }

  getUserData() {
    let user$ = collection(this.firestore, 'users');
    return collectionData(user$,{idField:'id'}) as Observable<User[]>
  }
}

/* get AppUser$(): Observable<firebase.default.UserInfo> {
  return this.authSvr.user$.pipe(
    switchMap((user) => {
        if(user){
            return this.getUser(user.uid).valueChanges()
          }else {
                return Observable.of(null)
          }
      })
  );
}
 */
