import { ScrollingModule } from '@angular/cdk/scrolling';
import { DatePipe, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, Inject, Injector, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { NgIdleModule } from '@ng-idle/core';
import { TextMaskModule } from 'angular2-text-mask';
import { AppRoutingModule } from './app.routes';
import { MatCardModule } from '@angular/material/card';
import { ManageTasksComponent } from './manageTasks/component/manage-tasks.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ManageTasksComponent
  ],
  imports: [
    MatCardModule,
    MatTableModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgIdleModule.forRoot(),
    TextMaskModule,
    MatTreeModule,
    ScrollingModule
  ],
  providers: [


    DatePipe,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [],
  exports: []
})
export class AppModule {
  constructor(private route: ActivatedRoute,
    @Inject(Injector) private injector: Injector) {


  }
}
