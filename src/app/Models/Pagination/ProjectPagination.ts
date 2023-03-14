
import  * as enum_ from '../../Enum/enum.model';
import {GetProject} from "../Project/project.model";
export interface  IProjectPagination {
pageIndex : number;
pageSize : number ;

count : number ;

data: GetProject[] ;

}
