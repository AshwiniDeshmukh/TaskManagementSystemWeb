import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manage-tasks',
  templateUrl: './manage-tasks.component.html'
})
export class ManageTasksComponent {

  displayedColumns: Array<string>;
  constructor() {
    this.displayedColumns = ['Assessment Name', 'Last Modified', 'Version', 'Last Modified By', 'Status', 'Details'];
  }
}