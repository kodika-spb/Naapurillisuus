import { Component } from '@angular/core';

@Component({
  selector: 'app-helper-my-account',
  templateUrl: './helper-my-account.component.html',
  styleUrls: ['./helper-my-account.component.css']
})
export class HelperMyAccountComponent {

  myQrCode: boolean = false;
  imgUrl = './assets/myAcc1.png';

}
