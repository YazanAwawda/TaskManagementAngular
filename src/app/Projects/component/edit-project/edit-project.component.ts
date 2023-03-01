import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../../Services/ProjectServices/project.service";
import {EditProject} from "../../../Models/Project/project.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements  OnInit{

  editProject ?: EditProject  ;
  projectId !: number ;

  projectFormGroup !: FormGroup ;

  constructor(private  projectServices : ProjectService ,
              private  formBuilder : FormBuilder ,
              private route : ActivatedRoute ,
              private  router : Router) {
  }
   ngOnInit():void{
    this.projectFormGroup = this.formBuilder.group({
      id : [''],
      name : [' ' , Validators.required] ,
      description : [' ' ,Validators.required] ,
      endDate :['']
    });
     // Retrieve project id from route parameter
     this.route.params.subscribe( params => {
       this.projectId = +params['id'];
       this.projectServices.getProjectByID(this.projectId).subscribe(
         project => {
           this.editProject = project ;
           this.projectFormGroup.patchValue({
             name : project.name ,
             description : project.description ,
             endDate : project.endDate ,
           })
         }
       )
     })
     // Fetch project data for editing

   }
   get id() {return this.projectFormGroup?.get('id');}
   get name() {return this.projectFormGroup?.get('name');}
   get description() {return this.projectFormGroup?.get('description');}
   get endDate() {return this.projectFormGroup?.get('endDate');}



  onSaveChanges(){
       // Save changes to project data
        const  EditProject_ : EditProject = {
        id : this.id?.value ,
        name : this.name?.value ,
        description : this.description?.value ,
         endDate : this.endDate?.value
    }
         EditProject_.id = this.projectId ;
       this.projectServices.editProject(EditProject_).subscribe(project => {
         this.editProject = EditProject_;
         this.router?.navigate(['/list-project']);
    })
  }

}
