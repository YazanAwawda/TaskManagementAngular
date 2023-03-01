
export interface GetProject {
  id ?: number;
  name ?: string;
  description ?: string;
  startDate ?: Date;
  endDate ?: Date;
  currentStatus?: 0
  team?: null;
  tasks?: [],
  trackerValue?: null,
}

export interface GetProjects {
  id : number ;
  name?: string;
  startDate?: Date;
  currentStatus?: 0;
  teamId?: number;
}

export interface CreateProject {
  name: string;
  description: string;
  startDate: Date;
  teamId?: number;
}

export interface EditProject {
  id?: number;
  name?: string;
  description?: string;
  endDate?: Date;
}

export interface ProjectAddTeam {
  id?: number;
  teamId?: number;
}

export interface DeleteProject {
  id?: number;
}

export interface uploadFileProject {
  projectId : number;
  fileProject: File [] ;
}

export interface downloadFileProject {
  projectId: number;
  attachmentId: number;
}
