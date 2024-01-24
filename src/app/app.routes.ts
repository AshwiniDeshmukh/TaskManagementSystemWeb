import { RouterModule, Routes } from '@angular/router';
import { ManageTasksComponent } from './manageTasks/manage-tasks.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '', component: ManageTasksComponent,
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
