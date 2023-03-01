import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';



import { CreateProjectComponent } from './Projects/component/create-project/create-project.component';
import { DeleteProjectComponent } from './Projects/component/delete-project/delete-project.component';
import { EditProjectComponent } from './Projects/component/edit-project/edit-project.component';
import { ListProjectComponent } from './Projects/component/list-project/list-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './MaterialModule/material.module';
import { ProjectService } from './Services/ProjectServices/project.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectDetailsComponent } from './Projects/component/project-details/project-details.component';
import { AddTaskComponent } from './Tasks/component/add-task/add-task.component';
import { DeleteTaskComponent } from './Tasks/component/delete-task/delete-task.component';
import { TaskListComponent } from './Tasks/component/task-list/task-list.component';
import { EditTaskComponent } from './Tasks/component/edit-task/edit-task.component';
import { TaskDetailsComponent } from './Tasks/component/task-details/task-details.component';

import  {PipeModule} from "./PipeModule";
import {TaskServices} from "./Services/TaskServices/task.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    CreateProjectComponent,
    DeleteProjectComponent ,
    EditProjectComponent,
    ListProjectComponent,
    ProjectDetailsComponent,
    AddTaskComponent,
    DeleteTaskComponent,
    TaskListComponent,
    EditTaskComponent,
    TaskDetailsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule ,
    FormsModule,
    NgxFileDropModule ,
    FontAwesomeModule ,
    PipeModule.forRoot()
    ],
  providers: [ProjectService ,TaskServices ,
    DeleteProjectComponent , ProjectDetailsComponent
  ],
  bootstrap: [AppComponent]
  ,
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
