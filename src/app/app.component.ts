import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskStoreService } from './manageTasks/storeServices/task-store.service';
import { TaskDataService } from './manageTasks/dataServices/task-data.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TaskStoreService, TaskDataService, HttpClientModule]
})
export class AppComponent {
  title = 'TaskManagementSystemWeb';
}
