import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manage-task-grid',
  templateUrl: './manage-tasks-grid.component.html'
})
export class ManageTasksGridComponent {

  displayedColumns: Array<string>;
  constructor() {
    this.displayedColumns = ['Assessment Name', 'Last Modified', 'Version', 'Last Modified By', 'Status', 'Details'];
  }
}