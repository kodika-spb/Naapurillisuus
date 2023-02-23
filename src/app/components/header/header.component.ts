import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  /*   imgUrl ='./assets/Logo_naapuri.png'; */
  /*  imgUrl = './assets/logo2.png'; */
  /*  imgUrl = './assets/logo_violetti.png'; */
  imgUrl = './assets/logotip.png';
  /*  imgUrl = './assets/third_logo.png'; */
  constructor (public afAuth: AngularFireAuth){}

  logout(): void{
    this.afAuth.signOut();
  }
}
