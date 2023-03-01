import { NgModule }      from '@angular/core';
import * as EnumPipe     from './EnumPipe/enum.pipe';

@NgModule({
  imports:        [],
  declarations:   [EnumPipe.TaskTypePipe , EnumPipe.TaskPriorityPipe ],
  exports:        [EnumPipe.TaskTypePipe , EnumPipe.TaskPriorityPipe ],
})

export class PipeModule {

  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: [],
    };
  }
}
