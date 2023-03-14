import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { CreateProjectComponent } from './Projects/component/create-project/create-project.component';
import {ListProjectComponent} from "./Projects/component/list-project/list-project.component";
import {EditProjectComponent} from "./Projects/component/edit-project/edit-project.component";
import {DeleteProjectComponent} from "./Projects/component/delete-project/delete-project.component";
import {ProjectDetailsComponent} from "./Projects/component/project-details/project-details.component";
import {AddTaskComponent} from "./Tasks/component/add-task/add-task.component";
import {TaskListComponent} from "./Tasks/component/task-list/task-list.component";
import {EditTaskComponent} from "./Tasks/component/edit-task/edit-task.component";
import {TaskDetailsComponent} from "./Tasks/component/task-details/task-details.component";
import {DeleteTaskComponent} from "./Tasks/component/delete-task/delete-task.component";
import {AllTasksComponent} from "./Tasks/component/all-tasks/all-tasks.component";

const routes: Routes = [
  // { path: 'pages-contact', component: PagesContactComponent },
  // { path: 'pages-error404', component: PagesError404Component },
  // { path: 'pages-faq', component: PagesFaqComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
  {path: 'create-project' , component:CreateProjectComponent},
  {path : 'list-project' , component:ListProjectComponent} ,
  {path : 'edit-project/:id' , component:EditProjectComponent},
  {path : 'delete-project', component:DeleteProjectComponent},
  {path : 'project-details/:id',component:ProjectDetailsComponent}
  ,{path:'create-task/:id' , component : AddTaskComponent},
   {path: 'task-listOfProject/:id', component:TaskListComponent },
   {path : 'All-Tasks' , component:AllTasksComponent},
   {path : 'edit-task/:id' , component : EditTaskComponent },
   {path : 'task-details/:id' , component :TaskDetailsComponent},
   {path : 'delete-task' , component : DeleteTaskComponent},

  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
