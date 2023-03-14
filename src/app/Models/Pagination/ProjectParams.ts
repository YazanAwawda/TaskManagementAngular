import * as enum_ from "../../Enum/enum.model";

export  interface ProjectParams {
ProjectStatusToDisplay : enum_.ProjectStatus[];
PageIndex : number ;

PageSize : number ;

Sort : string ;

Search : string ;
}
