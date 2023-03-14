import { Component, Input } from '@angular/core';
import { TaskServices } from 'src/app/Services/TaskServices/task.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent {
@Input() deleteID !: number;

constructor(private  taskServices :TaskServices ) {
}
deleteTask(){
this.taskServices.deleteTaskById(this.deleteID).subscribe();
window.location.reload();
}
}
