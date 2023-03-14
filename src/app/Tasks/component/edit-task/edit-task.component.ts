import {Component, OnInit} from '@angular/core';
import {TaskServices} from 'src/app/Services/TaskServices/task.service';
import {ActivatedRoute} from "@angular/router";
import {EditTask, GetTask} from "../../../Models/Tasks/task.model";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import  * as enum_ from '../../../Enum/enum.model'
import {enumValues} from "../../../EnumHelper/enum.helper";
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements  OnInit{

  editTasks ?: EditTask ;

  EditTasksFormGroup !: FormGroup<any> ;

  selectedTaskType = enum_.TaskType.FeatureRemove;

  public taskType = enum_.TaskType;
  public enumValue = enumValues;

  taskId !: number ;
  constructor( private  taskServices : TaskServices
              ,private  route : ActivatedRoute ,

               private  fb : FormBuilder) {
  }

    ngOnInit(): void {
    this.EditTasksFormGroup = this.fb.group({
     id : [''] ,
     name : ['' , Validators.required] ,
     description : [ '' , Validators.required] ,
     endDate : [' ' , Validators.required],
     taskType : [this.selectedTaskType , Validators.required]
    });
    //Retrieve task id from route parameter
      this.route.params.subscribe(
        params => {
          this.taskId = (+params['id']);
        }
      )
      this.taskServices.getTaskByID(this.taskId).subscribe((task) => {
        this.EditTasksFormGroup.patchValue({
          name : task.name,
          description : task.description ,
          endDate : task.endDate ,
          taskType : task.taskType
        });
        console.log(task);
      })
    }

    get id() {return this.EditTasksFormGroup.get('id');}

    get name() {return this.EditTasksFormGroup.get('name');}

    get description() {return this.EditTasksFormGroup.get('description');}


    get endDate() {return this.EditTasksFormGroup.get('endDate');}


    get taskType_() {return this.EditTasksFormGroup.get('taskType') as FormControl<enum_.TaskType>}


   onEditTask(){
    const editTask : EditTask = {
      id : this.taskId as number,
      name : this.name?.value ,
      description : this.description?.value ,
      endDate : this.endDate?.value ,
      taskType : this.taskType_?.value
    }

    this.taskServices.editTask(editTask).subscribe(editTask => {
      this.editTasks = editTask ;
      console.log(editTask);
    })
   }
}
