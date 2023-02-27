import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { VTask } from 'src/app/models/vtasks';
import { tasks as data } from 'src/app/data/tasks';
import { Router } from '@angular/router';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addToMyTasks(){
  this.router.navigate(['/helper-dashboard/my_tasks'])
  }
 
}
