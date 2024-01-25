import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ModelIdResponse, PageData } from '@wellsky/wcts-ui-core';
import { TaskDataService } from '../dataServices/task-data.service';
import { UserTaskReponse } from '../models/dto/user-task-response.dto';
import { CreateUserTaskRequest } from '../models/dto/create-user-task-request.dto';
import { UpdateUserTskRequest } from '../models/dto/update-user-task-request.dto';

@Injectable()
export class TaskStoreService {

  constructor(private taskDataService: TaskDataService) {
  }

  getUserTasks(userKey: string): Observable<UserTaskReponse[]> {
    return this.taskDataService.getUserTasks(userKey);
  }

  createUserTask(userKey: string, createUserTaskRequest: CreateUserTaskRequest): any {
    // return this.taskDataService.createUserTask(userKey, createUserTaskRequest);
  }

  updateUserTask(userTaskKey: string, updateUserTskRequest: UpdateUserTskRequest): Observable<boolean> {
    return this.taskDataService.updateUserTask(userTaskKey, updateUserTskRequest);
  }

  removeUserTask(userTaskKey: string, assessmentName: string): Observable<boolean> {
    return this.taskDataService.removeUserTask(userTaskKey);
  }

  restoreUserTask(userTaskKey: string): Observable<boolean> {
    return this.taskDataService.restoreUserTask(userTaskKey);
  }
}
