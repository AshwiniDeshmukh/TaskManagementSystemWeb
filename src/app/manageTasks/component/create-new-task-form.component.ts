import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CreateUserTaskRequest } from '../models/dto/create-user-task-request.dto';
import { TaskStoreService } from '../storeServices/task-store.service';

@Component({
  selector: 'app-create-new-task-form',
  templateUrl: './create-new-task-form.component.html',
  styleUrls: ['./task-management-landing-page.scss']
})
export class CreateNewTaskFormComponent implements OnInit {

  newUserTaskForm!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
    private taskStoreService: TaskStoreService) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.newUserTaskForm = this.formBuilder.group({
      taskStatus: ['', Validators.required],
      taskTitle: ['', Validators.required],
      taskDescription: ['', Validators.required],
      dueDate: ['', Validators.required],
      showCompletedTasks: [{ value: false, disabled: false }]
    });
  }

  onSubmit(): void {
    const userKey = "0afe0ac9-f952-415f-b8cb-5f371f89204e";
    const createTaskRequest: CreateUserTaskRequest = { title: "first", description: "fr", dueDate: new Date("2013/09/23") };
    this.taskStoreService.createUserTask(userKey, createTaskRequest);
  }
}