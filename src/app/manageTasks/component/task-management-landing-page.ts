import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-landing-page',
  templateUrl: './task-management-landing-page.html',
  styleUrls: ['./task-management-landing-page.scss'
  ]
})

export class TaskManagementLandingPageComponent {

  public showSideNav: boolean = true;

  constructor(protected router: Router) {

  }

  public navigate(url: string): void {
    this.router.navigate([url]);
    if (this.showSideNav) {
      this.showSideNav = !this.showSideNav
    }
  }
}