import { RouterModule, Routes } from '@angular/router';
import { ManageTasksComponent } from './manageTasks/component/manage-tasks.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TaskManagementLandingPageComponent } from './manageTasks/component/task-management-landing-page';

export const routes: Routes = [
    {
        path: '', component: TaskManagementLandingPageComponent,
        children: [
            { path: 'manageTasks', component: ManageTasksComponent, data: { title: 'Manage Tasks' } },

        ]
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
