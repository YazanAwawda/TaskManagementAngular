import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // ProjectStatusToDisplay : enum_.ProjectStatus[];
  // PageIndex : number ;
  //
  // PageSize : number ;
  //
  // Sort : string ;
  //
  // Search : string ;

  @Input() pageSize_ !: number ;
  @Input() totalCount_ !: number ;
  @Output() pageChanged_ = new EventEmitter<number>() ;
  constructor() { }

  ngOnInit(): void {
  }

  onPageChanged(event : any){
    this.pageChanged_.emit(event.page)
  }

}
