import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, concatMap, forkJoin, map, Observable, tap, throwError} from 'rxjs';
import { CreateProject, DeleteProject, downloadFileProject, EditProject, GetProject, GetProjects, ProjectAddTeam, uploadFileProject } from 'src/app/Models/Project/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  projectUrl: string = "https://localhost:7011/api/Project";
  file_s !: uploadFileProject ;

  getProjects(): Observable<GetProjects[]> {
    return this.http.get<GetProjects[]>(`${this.projectUrl}`);
  }

  getProjectByID(Id: number): Observable<GetProject> {

    return this.http.get<GetProject>(`${this.projectUrl}/${Id}`);
  }

  addProject(project: CreateProject): Observable<CreateProject> {
    return this.http.post<CreateProject>(`${this.projectUrl}`, project);
  }

  deleteProject(Id: number): Observable<DeleteProject> {
    return this.http.delete<DeleteProject>(`${this.projectUrl}/${Id}`);
  }

  editProject(project: EditProject): Observable<EditProject> {
    return this.http.patch<EditProject>(`${this.projectUrl}`, project)
      .pipe(catchError(this.handleError));
  }
  getProjectNames() {
    return this.http.get<{ id: number; name: string }[]>(`${this.projectUrl}`).pipe(
      map(data => data.map(project => project.name))
    );
  }
  uploadFiles(fileToUpload: File  []  , projectId : number ) {
    fileToUpload = this.file_s.fileProject ;
    const formData = new FormData();
    const headers = new HttpHeaders().append('Content-Disposition' , 'multipart/form-data');
    fileToUpload.forEach(file => {
      formData.append('file' , file)
      this.http.post(`${this.projectUrl}/Upload`, {formData,projectId} , {headers} ).subscribe();

    });
  }

  uploadFile(fileToUpload: File  , projectId : number ) {
    const formData = new FormData();
    const headers = new HttpHeaders().append('Content-Disposition' , 'multipart/form-data');
      formData.append('file' , fileToUpload)
      this.http.post(`${this.projectUrl}/Upload`, {formData,projectId} , {headers} ).subscribe();

    };

  downloadFile(fileDownload: downloadFileProject): Observable<any> {
    return this.http.get(`${this.projectUrl}/${fileDownload.projectId}/${fileDownload.attachmentId}`, { responseType: 'blob' })
  }

  addProjectTeam(ProjectAddTeam_: ProjectAddTeam): Observable<ProjectAddTeam> {
    return this.http.post<ProjectAddTeam>(`${this.projectUrl}`, ProjectAddTeam_);
  }

  createProject(files: File[], project: CreateProject) {
    const file = files[0];
    const formdata= new FormData();


    return this.http.post<number>(`${this.projectUrl}`, project).pipe(
      map(x => {
        formdata.append("OwnerId", x.toString());
        formdata.append("File",file,file.name);
        return formdata;
      }),
      concatMap(val => this.http.post(`${this.projectUrl}/Upload`,val)
    ))
  }


  // Handles errors for catch error
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordintly .
      console.error('An error occured:', error.error);
    } else if (error.status === 400) {
      return throwError(error.error);
    }
    else if (error.status === 413) {
      return throwError(error.error);
    }
    else {
      // The backend returned an un successfully response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happen; please try again later.')
  }

  getProjectList() {
    const ids  = [] ;
    return  this.http.get<GetProjects[]>(`${this.projectUrl}`).subscribe((data : GetProjects[]) => {
      console.log(data);
      for (let i = 0 ; i< data.length ; i++) {
        ids.push(data[i].name)
      }
    }) ;
  }
}
