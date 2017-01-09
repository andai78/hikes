import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HikeListComponent } from '../hike-list/hike-list.component';
import { HikeService } from './hike.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HikeListComponent],
  providers: [HikeService],
  exports: [HikeListComponent]
})
export class HikeModule { }
