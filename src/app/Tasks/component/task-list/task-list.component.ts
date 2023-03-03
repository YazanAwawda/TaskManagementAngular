import { Component, OnInit } from '@angular/core';
import {TaskServices} from "../../../Services/TaskServices/task.service";
import {GetTask} from "../../../Models/Tasks/task.model";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements  OnInit{

  tasks !: GetTask[];
  projectId !: number ;

  getFixBugTasks() : void{
    // return this.tasks.filter();
  }

  constructor(private  tasksServices : TaskServices ,
              private  route : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(x => {
     this.projectId = Number(x["id"])
    });

this.tasksServices.getTaskByProjectID(this.projectId).subscribe((tasks:GetTask[]   )=> {
  this.tasks = tasks ;
  console.log(tasks)
});


  }







}
