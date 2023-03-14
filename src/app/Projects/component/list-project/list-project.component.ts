import {Component, OnInit} from '@angular/core';
import {GetProjects} from "../../../Models/Project/project.model";
import {ProjectService} from "../../../Services/ProjectServices/project.service";
import {ActivatedRoute} from "@angular/router";
import {DeleteProjectComponent} from "../delete-project/delete-project.component";
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder} from "@angular/forms";
import {ProjectParams} from "../../../Models/Pagination/ProjectParams";
import {ProjectStatus} from "../../../Enum/enum.model";


@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit{
  projects :GetProjects [] =[]  ;

  constructor(
    private dialog: MatDialog ,
    private  projectServices : ProjectService ,

    private  fb : FormBuilder ,
    private route : ActivatedRoute) {
  }


  ngOnInit(): void {

    const projectParams : ProjectParams = {
      ProjectStatusToDisplay : [
        ProjectStatus.New ,
        ProjectStatus.Completed ,
        ProjectStatus.InProgress ,
        ProjectStatus.Canceled  ,
        ProjectStatus.Open ] ,
        Search : '' ,
        Sort : '' ,
        PageSize : 0 ,
        PageIndex : 0
    };

    this.projectServices.getProjects().subscribe((projects) => {
    this.projects = projects; // properties equal parameters
    console.log(projects);
    });


  }
  // deletes the selected project
  deletionConfirmation(id: number): void {
    const modalRef = this.dialog.open(DeleteProjectComponent);
    modalRef.componentInstance.deleteID = id;
  }
}
