import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CreateProject, EditProject, uploadFileProject} from 'src/app/Models/Project/project.model';
import { ProjectService } from 'src/app/Services/ProjectServices/project.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  ProjectFormGroup !: FormGroup;


  errMsg !: string;
  private selectedFiles !: File[];
  private newFileName !: string;
  files : File[] = [] ;
  constructor(private projectServices: ProjectService, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.ProjectFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      description: [''],
      startDate: ['', Validators.required],
      teamID: [''],
      projectId : [''] ,
       fileProject: this.fb.array<File[]>([])
    })
  }


  get name() { return this.ProjectFormGroup.get('name'); }
  get description() { return this.ProjectFormGroup.get('description'); }
  get startDate() { return this.ProjectFormGroup.get('startDate'); }
  get fileProject() { return this.ProjectFormGroup.get('fileProject') }
  get projectId() {return this.ProjectFormGroup.get('projectId')}

  // informs user of required fields and initiates project adding to DB
  checkForm(): void {
    // resets the error message is not empty
    if (this.errMsg != undefined || this.errMsg != '') {
      this.errMsg = '';
    }

    // required field check
    if (this.ProjectFormGroup.invalid) {
      this.ProjectFormGroup.markAllAsTouched();
      return;
    }

    this.projectCreationController();
  }

  // Controller for handling project creation
   async projectCreationController(): Promise<void> {
    // if (this.selectedFiles != undefined || this.selectedFiles != null) {
      try {
        // upload the File
        //  await this.uploadFileOfProject();

        // add the project
        await this.addNewProject();

      } catch (error: any) {
        console.error(error);
        this.errMsg = error;
        return;
      }
    // } else {
    //   // add the project
    //   await this.addNewProject();
    // }

    // reset the form
    this.formCleaner();
  }

  private addNewProject(): Promise<Object> {
    // checks if a file was selected and set as the file
    if (this.selectedFiles != undefined || this.selectedFiles != null) {
      this.handleFileInput(event);
    }

    // creates a new project to send to the server
    const newProject: CreateProject = {
      name: this.name?.value,
      description: this.description?.value,
      startDate: this.startDate?.value,
    };

    this.files = this.selectedFiles
    return new Promise((resolve, reject) => {
    this.projectServices.createProject(this.files , newProject).subscribe(response => {
        resolve(response);
        // shows a message that the project has been saved
        this.savedMessage();
      }, (error) => {
        reject(error);
      });
    });
  }
  // resets fields of the form
  private formCleaner(): void {
    // resets the form
    this.ProjectFormGroup.reset();

    // resets the file upload field
    this.fileProject?.reset();

    // resets the selected file
    this.selectedFiles = undefined as unknown as File[];

    // reset the file name
    this.newFileName = undefined as unknown as string;

    // reset the error message
    this.errMsg = '';

  }
  // manual form reset
  formCleanerManual(): void {
    this.formCleaner();
  }
  // add a new file to the FormArray
   handleFileInput(event: Event | any) : void {
    let projectFile = this.fb.group({
      files: [(event.target as HTMLInputElement).files]
    });

    // this.fileProject.push(projectFile);

    (event.target as HTMLInputElement).files = null;
    (event.target as HTMLInputElement).value = "";
  }

  // selects the file
  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
  }

  // handle file uploading
  // private uploadFileOfProject() {
  //   const formData: FormData = new FormData();
  //   this.newFileName = this.fileNameGenerator(this.selectedFiles.name);
  //   formData.append('file', this.selectedFiles, this.newFileName);
  //   // the current count of files in the array to check against the limit
  //   let count: string = `${this.fileProject.length}`;
  //   formData.append('count', count);
  //   return new Promise((resolve, reject) => {
  //     // this.projectServices.uploadFiles(formData).subscribe(response => {
  //     //   resolve(response);
  //     // }, (error: any) => {
  //     //   reject(error);
  //     // });
  //   });
  // }

  // Add a timestamp to the filename
  private fileNameGenerator(fileName: string): string {
    const date: Date = new Date();
    const timeStamp: number = date.getTime();

    let extension: string = '';

    if (fileName.includes('.')) {
      let extensionIndex: number = fileName.lastIndexOf('.');
      extension = fileName.substring(extensionIndex);
      fileName = fileName.substring(0, extensionIndex);
    }

    return `${fileName}${timeStamp}${extension}`;
  }

  postFile(files: File) {
    // const newFile: uploadFileProject = {
    //   fileProject: this.fileProject?.value,
    //   projectId : this.projectId?.value
    // }
  this.projectServices.uploadFile(files,this.projectId?.value);

  }
  // shows a message and fades out
  private savedMessage(): void {
    let updateConfirmation = document.getElementById('projectSaved');
    updateConfirmation?.classList.toggle('d-none');

    setTimeout(() => {
      updateConfirmation?.classList.toggle('fade-out');
    }, 2000);

    setTimeout(() => {
      updateConfirmation?.classList.add('d-none');
      updateConfirmation?.classList.remove('fade-out');
    }, 3000);
  }


}
