import {Component, OnInit} from '@angular/core';
import {GetProject} from "../../../Models/Project/project.model";
import {ProjectService} from "../../../Services/ProjectServices/project.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as enumModal from "../../../Enum/enum.model";
import  {enumToString} from "../../../EnumHelper/enum.helper";
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements  OnInit {

  public projects_ !: GetProject ;
  /* @Input()*/ public projectID !: number  ;
  // @Output() projectIDChanged = new EventEmitter<number>(); // declare the event emitter here

  public currentStatus !: enumModal.ProjectStatus[] | any ;
  constructor(private  projectService : ProjectService ,
              private route : ActivatedRoute ,
              private  router : Router) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.projectID = +params['id'];});

      this.projectService.getProjectByID((this.projectID)).subscribe(
        (project_:GetProject   ) => {
          this.projects_ = project_;
          let e = enumToString(enumModal.ProjectStatus , this.projects_.currentStatus ) ;
          this.projects_.currentStatus = e ;
          console.log(e);
          // this.projects_.currentStatus = enumModal.ProjectStatus[this.currentStatus]
         // this.projectIDChanged.emit(this.projectID); // emit the event when projectID is updated
    });
  }



  onAddTaskForProject() {
    this.router?.navigate([`/create-task/${this.projectID}`])
}
   onViewTasksProject(){
    this.router?.navigate([`/task-listOfProject/${this.projectID}`])
}

}
