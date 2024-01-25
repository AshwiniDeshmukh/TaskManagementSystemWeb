import { HttpClient, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from '../../shared/_base-data-service';
import { ApiOkResponse, ApiResponse, ModelIdResponse } from '../../shared/response.dto'
import { UserTaskReponse } from '../models/dto/user-task-response.dto';
import { CreateUserTaskRequest } from '../models/dto/create-user-task-request.dto';
import { UpdateUserTskRequest } from '../models/dto/update-user-task-request.dto';

@Injectable()
export class TaskDataService extends DataService {

  constructor(
    private http: HttpClient) {
    super();
  }

  getUserTasks(userKey: string): Observable<UserTaskReponse[]> {
    const url = "https://localhost:5001/api/taskmanagement";
    let httpParams = new HttpParams().set('userKey', userKey);
    return this.http.get<UserTaskReponse[]>(url, this.httpOptions('UserTask', httpParams))
      .pipe(
        map(res => res)
      );
  }

  createUserTask(userKey: string, createUserTaskRequest: CreateUserTaskRequest): Observable<ModelIdResponse> {
    const url = "https://localhost:5001/api/taskmanagement";
    let httpParams = new HttpParams().set('userKey', userKey);
    const payLoad: string = JSON.stringify({ 'createUserTaskRequest': createUserTaskRequest });

    return this.http.post<ModelIdResponse>(url, payLoad, this.httpOptions('UserTask', httpParams))
      .pipe(
        map(res => res)
      );
  }

  updateUserTask(userTaskKey: string, updateUserTskRequest: UpdateUserTskRequest): Observable<boolean> {
    const url = "https://localhost:5001/api/taskmanagement";
    const payLoad: string = JSON.stringify(updateUserTskRequest);

    return this.http.put<ApiOkResponse>(url, payLoad, this.httpOptions('updateUserTask'))
      .pipe(
        map(res => res.statusCode === HttpStatusCode.Ok)
      );
  }

  removeUserTask(userTaskKey: string): Observable<boolean> {
    const url = "https://localhost:5001/api/taskmanagement";

    return this.http.put<ApiOkResponse>(url, this.httpOptions('removeUserTask'))
      .pipe(
        map(res => res.statusCode === HttpStatusCode.Ok)
      );
  }

  restoreUserTask(userTaskKey: string): Observable<boolean> {
    const url = "https://localhost:5001/api/taskmanagement";

    return this.http.put<ApiOkResponse>(url, this.httpOptions('restoreUserTask'))
      .pipe(
        map(res => res.statusCode === HttpStatusCode.Ok)
      );
  }
}
