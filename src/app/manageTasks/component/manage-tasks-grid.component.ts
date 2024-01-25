import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserTaskReponse } from '../models/dto/user-task-response.dto';
import { TaskStoreService } from '../storeServices/task-store.service';

@Component({
  selector: 'app-manage-task-grid',
  templateUrl: './manage-tasks-grid.component.html'
})
export class ManageTasksGridComponent {

  displayedColumns: Array<string>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<UserTaskReponse>([]);

  constructor(private taskStoreService: TaskStoreService) {
    this.displayedColumns = ['TaskName', 'Description', 'DueDate', 'TaskType', 'Status', 'Details'];
  }

  ngOnInit(): void {
    this.populateTasks();
  }

  private populateTasks() {
    const userKey = "0afe0ac9-f952-415f-b8cb-5f371f89204e";
    this.dataSource.data = [];

    this.taskStoreService.getUserTasks(userKey)
      .subscribe(tasks => {
        this.dataSource.data = tasks;

      });
  }
}