import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helper-my-account',
  templateUrl: './helper-my-account.component.html',
  styleUrls: ['./helper-my-account.component.css']
})
export class HelperMyAccountComponent {

  myQrCode: boolean = false;
  imgUrl = './assets/myAcc1.png';

  constructor(private router: Router){}

  askHelp(){
    this.router.navigate(['client-task-form'])
  }
}
