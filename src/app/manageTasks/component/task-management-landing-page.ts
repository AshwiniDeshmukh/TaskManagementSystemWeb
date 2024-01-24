import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-landing-page',
  templateUrl: './task-management-landing-page.html'
})

export class TaskManagementLandingPageComponent {

  constructor(protected router: Router) {

  }
  navigate() {
    console.log("hi");
    this.router.navigate(["./manageTasks"]);

  }
}