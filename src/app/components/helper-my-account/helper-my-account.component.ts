import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-helper-my-account',
  templateUrl: './helper-my-account.component.html',
  styleUrls: ['./helper-my-account.component.css'],
})
export class HelperMyAccountComponent {
  myQrCode: boolean = false;
  imgUrl = './assets/myAcc1.png';
  users: User[] = []

  constructor(
    private router: Router,
    private userDataService: UserDataService
  ) {
    this.userDataService.getUserData().subscribe((data) => {
      this.users = data
      console.log(this.users);
    });
  }

  askHelp() {
    this.router.navigate(['client-task-form']);
  }
}
