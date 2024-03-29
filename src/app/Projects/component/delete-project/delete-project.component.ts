import { Component, Input } from '@angular/core';
import {ProjectService} from "../../../Services/ProjectServices/project.service";

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent {

  /* Custom input component */

  //holds the project id
  @Input() deleteID !: number ;


  // constructor holds the project service
  constructor(private project_Services : ProjectService ) {
  }
  deleteProjectCustom() {
    this.project_Services.deleteProject(this.deleteID).subscribe();
    window.location.reload();
  }

}

