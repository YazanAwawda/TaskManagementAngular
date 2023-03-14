import { Guid } from "guid-typescript";
export  interface  CreateTeam {
  teamName: string  ;
  teamLeader : {
    id :  Guid ;
  };
  employees : [{
    id : Guid ;
  }];
}

export interface  GetTeam {
teamName :  string ;
teamMembers : [{
  employee : {
    id :  number ;
  },
  isTeamLeader: boolean ;
  id :  number ;
}],
  project : {
  name : string ;
  description :  string ;
    team: {
      teamName: string,
      teamMembers: [
        {
          employee: {
            id:number
          },
          isTeamLeader: boolean,
          id: number
        }
      ],
      teamLeader: null,
      id: number
    },
    numberOfOpenTasks: number,
    startDate: Date,
    currentStatus: 0,
    teamId: number,
    id: number ;
  },
  id : number ;
}

export  interface  EditTeam {
  id : number ;
  teamName : string ;
  teamMembers : [
    {
      id : number ;
      teamId : number ;
    }
  ]
}

export interface  GetTeamById {
  id : number ;
}

export interface  DeleteTeamById {
  id : number ;
}

export interface  GetAvailableTeams {
  teamName :  string ;
  id : number ;
}
