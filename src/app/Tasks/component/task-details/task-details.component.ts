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

  constructor(private  taskServices : TaskServices ,
              private  route : ActivatedRoute ,
              private projectServices : ProjectService) {
  }
  ngOnInit() {

  }


}
