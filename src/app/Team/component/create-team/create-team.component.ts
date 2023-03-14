import {Component, OnInit} from '@angular/core';
import {CreateTeam} from "../../../Models/Team/team.model";
import {FormArray, FormBuilder, FormGroup, RequiredValidator, Validators} from "@angular/forms";
import {TeamService} from "../../../Services/TeamServices/team.service";
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent  implements  OnInit{

team !: CreateTeam ;
teamFormGroup !: FormGroup ;
constructor(private  fb : FormBuilder , private  teamServices : TeamService) {
}

  ngOnInit(): void {
    this.teamFormGroup = this.fb.group({
      teamName : ['',Validators.required] ,

      teamLeader : this.fb.group({
        id : ['']
      }),

      employees : this.fb.array(
        [this.fb.group({
          id : ['']
        })]
      )
    })
  }

  get teamName() {return this.teamFormGroup.get('teamName');}
  get teamLeader() {return this.teamFormGroup.get('teamLeader') as FormGroup ; }
  get teamLeaderID () {return this.teamLeader.get('id')?.value ;}

  get employees() {return this.teamFormGroup.get('employees') as FormArray ; }

  get employeeID() {return this.employees.at(0).get('id')?.value ;}


  onAddTeam() {
  const creatTeam : CreateTeam = {
    teamName : this.teamName?.value ,

    teamLeader : this.teamLeaderID?.value ,

    employees : this.employeeID?.value
    }

    this.teamServices.CreateTeam(creatTeam).subscribe(team => {
      this.team  = team ;
      console.log(team);
    })
  }

}
