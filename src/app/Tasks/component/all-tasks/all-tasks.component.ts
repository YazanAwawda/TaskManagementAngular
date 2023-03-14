import {Component, OnInit} from '@angular/core';
import {GetTask} from "../../../Models/Tasks/task.model";
import {TaskServices} from "../../../Services/TaskServices/task.service";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements  OnInit{

  tasks : GetTask[] = [];
  constructor(private taskServices : TaskServices) {
  }
    ngOnInit(): void {
   this.taskServices.getAllTask(this.tasks).subscribe(task => {
     this.tasks = task ;
     console.log(this.tasks)
   })
    }

}
