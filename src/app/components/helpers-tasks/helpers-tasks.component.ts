import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helpers-tasks',
  templateUrl: './helpers-tasks.component.html',
  styleUrls: ['./helpers-tasks.component.css']
})
export class HelpersTasksComponent implements OnInit {

  manageTask: boolean = false;
  constructor(private router: Router){}

  ngOnInit(){
  }
  completedTask(){
   this.router.navigate(['/helper-dashboard/done'])
  }
  cancelTask(){
    this.router.navigate(['/helper-dashboard'])
  }
}
