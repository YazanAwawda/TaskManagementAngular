import {Component, OnInit} from '@angular/core';
import {GetTask} from "../../../Models/Tasks/task.model";
import {GetProject} from "../../../Models/Project/project.model";
import {TaskServices} from "../../../Services/TaskServices/task.service";
import {ProjectService} from "../../../Services/ProjectServices/project.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements  OnInit{
  tasksInfo !: GetTask;
  taskId !: number ;
  constructor(private  taskServices : TaskServices ,
              private  route : ActivatedRoute ) {
  }
  ngOnInit() {
    this.route.params.subscribe(x =>
     this.taskId =  Number(x['id']))

    this.taskServices.getTaskByID(this.taskId).subscribe(task => {
      this.tasksInfo = task ;
      console.log(this.tasksInfo);
    })
  }


}
