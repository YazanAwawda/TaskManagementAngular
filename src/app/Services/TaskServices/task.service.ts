import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {CreateTasks, GetTask} from "../../Models/Tasks/task.model";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskServices {

   private taskUrl : string = "https://localhost:7011/api/Tasks" ;


   //Create Object call Http Headers to set a header
   private  httpOptions = {
     header: new HttpHeaders(
       {
         'Content-Type' : 'application/json'
       }
     )
   }
   // Create Object call HttpParams to set a params
   private  httpParams = new HttpParams();
  constructor(private  http : HttpClient) { }
  addTask ( createTasks ?: CreateTasks) :Observable<CreateTasks> {
    return  this.http.post<CreateTasks>(`${this.taskUrl}`, createTasks);
  }

  getTaskByProjectID(projectId : number ):Observable<GetTask[]>{
     //set request params
   let params =  this.httpParams.set('projectId', projectId);
   return this.http.get<GetTask[]>(`${this.taskUrl}`,{'headers': this.httpOptions.header , params : params});
  }
  getTaskByID(taskId : number) : Observable<GetTask> {
    //set request params
    let params = this.httpParams.set('taskId' , taskId);
    return  this.http.get<GetTask>(`${this.taskUrl}`, {'headers' : this.httpOptions.header , params: params});
  }

  getAllTask(allTasks :GetTask[]):Observable<GetTask[]>{
   return this.http.get<GetTask[]>(`${this.taskUrl}`)
  }

}
