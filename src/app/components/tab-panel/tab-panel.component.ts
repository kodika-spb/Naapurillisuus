import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css'],
})
export class TabPanelComponent implements OnInit {
  @Input() showTap: boolean;
  active: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (window.location.pathname === 'helper-dashboard') {
        this.active = 1;
      } else if (window.location.pathname === '/helper-dashboard/my_tasks') {
        this.active = 2;
      } else if (window.location.pathname === '/helper-dashboard/done') {
        this.active = 3;
      } else if (window.location.pathname === '/helper-dashboard/my-account') {
        this.active = 4;
      }
    });
  }
}
