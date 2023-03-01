import {Pipe , PipeTransform} from "@angular/core";
import *  as EnumModal from "../Enum/enum.model";

@Pipe({name : 'TaskType'})
export class TaskTypePipe implements  PipeTransform {

  transform(value: EnumModal.TaskType) : string {
    switch (value) {
      case  EnumModal.TaskType.FeatureAdd : return 'FeatureAdd' ;
      case  EnumModal.TaskType.BugFix  :  return 'BugFix' ;
      case  EnumModal.TaskType.FeatureRemove : return 'FeatureRemove' ;
      default : return 'No transformation created for ${value} ' ;
    }
    }
}
@Pipe({name: 'TaskPriority'})
export  class  TaskPriorityPipe implements  PipeTransform {
    transform(value:EnumModal.TaskPriority) {
     switch (value) {
       case EnumModal.TaskPriority.High : return 'High' ;
       case EnumModal.TaskPriority.Low : return 'Low';
       case EnumModal.TaskPriority.Moderate : return 'Moderate' ;
       case EnumModal.TaskPriority.VeryHigh : return  'VeryHigh';
       case EnumModal.TaskPriority.VeryLow :  return  'VeryLow' ;
       default : return 'No transformation created for ${value} ' ;
     }
    }

}

