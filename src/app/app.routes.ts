import { RouterModule, Routes } from '@angular/router';
import { ManageTasksComponent } from './manageTasks/component/manage-tasks.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TaskManagementLandingPageComponent } from './manageTasks/component/task-management-landing-page';
import { CreateNewTaskFormComponent } from './manageTasks/component/create-new-task-form.component';
import { APP_BASE_HREF } from '@angular/common';

export const routes: Routes = [
    {
        path: '', component: TaskManagementLandingPageComponent,
        children: [
            { path: 'manageTasks', component: ManageTasksComponent, data: { title: 'Manage Tasks' } },
            { path: 'addNewTask', component: CreateNewTaskFormComponent, data: { title: 'Add new Task' } },
        ]
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
    ]
})
export class AppRoutingModule { }
