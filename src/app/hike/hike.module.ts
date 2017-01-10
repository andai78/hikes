import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HikeListComponent } from '../hike-list/hike-list.component';
import { HikeService } from './hike.service';
import { HikeDetailsComponent } from '../hike-details/hike-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HikeListComponent,HikeDetailsComponent],
  providers: [HikeService],
  exports: [HikeListComponent]
})
export class HikeModule { }
