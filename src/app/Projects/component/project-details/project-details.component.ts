import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GetProject} from "../../../Models/Project/project.model";
import {ProjectService} from "../../../Services/ProjectServices/project.service";
import {TaskServices} from "../../../Services/TaskServices/task.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements  OnInit {

  projects_ !: GetProject ;
  /* @Input()*/ projectID !: number  ;
  // @Output() projectIDChanged = new EventEmitter<number>(); // declare the event emitter here

  constructor(private  projectService : ProjectService ,
              private  taskService :TaskServices ,
              private route : ActivatedRoute ,
              private  router : Router) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectID = +params['id'];
      this.projectService.getProjectByID((this.projectID)).subscribe((project_:GetProject   )  => {
        this.projects_ = project_ ;
         console.log(project_);
        // this.projectIDChanged.emit(this.projectID); // emit the event when projectID is updated
      });
    });
  }



  onAddTaskForProject() {
    this.router?.navigate([`/create-task/${this.projectID}`])
}
}
