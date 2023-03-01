import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateTasks} from "../../Models/Tasks/task.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskServices {

   createTasks ?: CreateTasks;
   taskUrl : string = "https://localhost:7011/api/Tasks" ;
   constructor(private  http : HttpClient) { }
  addTask ( createTasks ?: CreateTasks) :Observable<CreateTasks> {
    return  this.http.post<CreateTasks>(`${this.taskUrl}`, createTasks);
  }



}
