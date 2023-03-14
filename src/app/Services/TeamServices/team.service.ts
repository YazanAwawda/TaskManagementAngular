import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateTeam} from "../../Models/Team/team.model";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private  teamUrl =  'https://localhost:7011/api/Team';
  constructor(private  http: HttpClient) { }

  CreateTeam(creatTeam : CreateTeam) : Observable<CreateTeam>{
    return this.http.post<CreateTeam>(`${this.teamUrl}`,creatTeam);
  }
}
