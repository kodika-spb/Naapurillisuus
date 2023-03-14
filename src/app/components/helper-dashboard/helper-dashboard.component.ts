import { Component, OnInit } from '@angular/core';
import { VTask } from 'src/app/models/vtasks';
import { tasks as data } from 'src/app/data/tasks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helper-dashboard',
  templateUrl: './helper-dashboard.component.html',
  styleUrls: ['./helper-dashboard.component.css'],
})
export class HelperDashboardComponent implements OnInit {
  imgUrl = './assets/myAcc4.png';
  disabled = false;
  myQrCode: boolean = false;
  tasks: VTask[] = data;
  active: any;
  alert: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addToMyTasks() {
    this.alert = true;
  }

  closeAlert(){
    this.alert = false
  }
}
