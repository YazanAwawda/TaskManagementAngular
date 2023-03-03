
import * as Enum_ from "../../Enum/enum.model" ;
export interface GetTask {
  id ?: number,
  name ?: string,
  description ?: string,
  estimatedDueDate  ?: Date,
  actualDueDate ?: Date,
  startDate ?: Date,
  endDate ?:  Date,
  currentStatus ?: Enum_.TaskStatus ,
  projectId ?: number,
  taskType ?: Enum_.TaskType,
  priority ?: Enum_.TaskPriority,
  durationProgress ?: 0
}
export interface CreateTasks {
  name ?: string,
  description ?: string,
  projectId ?: number,
  taskType ?: Enum_.TaskType,
  priority ?: Enum_.TaskPriority,
  assignedTeamMember ?: {
    id ?: string,
    teamId ?: number
  },
  estimatedDueDate ?: Date

}
export interface editTask {
  id: number,
  name: string,
  description: string,
  endDate: Date,
  taskType: 0
}
export interface deleteTask {
  id: number
}
export interface getTaskById {
  id: number
}
export interface TaskComment {
  content: string,
  parentCommentId: 0,
  taskId: 0
}
export interface createSubTask {
  parentTaskId: number,
  name: string,
  description: string,
  estimatedDueDate: Date,
  taskType: 0,
  priority: 0,
  teamMemberEmployeeId: string
}
export interface editAssignTeamMember {
  taskId: number,
  employeeID: string
}
export interface ReAssignTeamMember {
  taskId: number,
  employeeID: string
}
export interface uploadTasksFile {
  OwnerId: number,
  File: string
}
export interface DownloadFileTask {
  taskId: number,
  attachmentId: number
}
