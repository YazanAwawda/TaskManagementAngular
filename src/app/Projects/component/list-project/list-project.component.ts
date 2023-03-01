import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {EditProject, GetProjects} from "../../../Models/Project/project.model";
import {ProjectService} from "../../../Services/ProjectServices/project.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {DeleteProjectComponent} from "../delete-project/delete-project.component";
import { MatDialog } from '@angular/material/dialog';
import {Form, FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit{
  projects:GetProjects [] = [] ;
  constructor(
    private dialog: MatDialog ,
    private  projectServices : ProjectService ,

    private  fb : FormBuilder ,
    private route : ActivatedRoute) {
  }


  ngOnInit(): void {
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
