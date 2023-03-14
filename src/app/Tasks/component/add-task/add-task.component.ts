import {Component, OnInit, ViewChild} from '@angular/core';
import { enumValues } from 'src/app/EnumHelper/enum.helper';
import  * as enum_ from  "../../../Enum/enum.model";
import {CreateTasks} from "../../../Models/Tasks/task.model";
import {TaskServices} from "../../../Services/TaskServices/task.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskPriority, TaskType} from "../../../Enum/enum.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements  OnInit{
  public enumValue = enumValues;
  public taskType = enum_.TaskType ;
  public selectedTaskType = enum_.TaskType.FeatureRemove ;

  public taskPriority = enum_.TaskPriority ;
  public selectedTaskPriority = enum_.TaskPriority.Low ;

  tasks !: CreateTasks ;
  TaskFormGroup !: FormGroup<any>  ;
  projectID !: number ;

  // @ViewChild(ProjectDetailsComponent) projectDetailsComponent!: ProjectDetailsComponent;

  constructor(private  taskService : TaskServices ,
              private route: ActivatedRoute,
              private  fb : FormBuilder
              ) {
  }
  ngOnInit(): void {
    // subscribe to the event here
    this.route.params.subscribe(x => {
      this.projectID = Number(x["id"])
    });

    this.TaskFormGroup = this.fb.group({
      name : ['' ] ,
      description : [''] ,
      projectId: [this.projectID] ,
      taskType : [this.selectedTaskType,Validators.required] ,
      taskPriority : [this.selectedTaskPriority,Validators.required] ,
      estimatedDueDate : [' ']
    });

  }
  onSubmit() : void{

    this.addTask();
  }

get name() {return this.TaskFormGroup?.get('name') ;}
get description() {return this.TaskFormGroup?.get('description')}
get taskType_() {return this.TaskFormGroup?.get('taskType') as FormControl<TaskType>;}
get estimatedDueDate() {return this.TaskFormGroup?.get('estimatedDueDate');}

get TaskPriority_() {return this.TaskFormGroup?.get('taskPriority') as FormControl<TaskPriority>;}

   private addTask() : void{

    const creatTask_ : CreateTasks = {
    name : this.name?.value ,
    description : this.description?.value ,
    taskType : this.taskType_?.value ,
    estimatedDueDate : this.estimatedDueDate?.value,
    priority : this.TaskPriority_?.value,
    projectId :  this.projectID as number
    }
     this.taskService.addTask(creatTask_).subscribe(task => {
       this.tasks = task ;
       console.log(task)
    })
  }



}
