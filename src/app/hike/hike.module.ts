import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HikeListComponent } from '../hike-list/hike-list.component';
import { HikeService } from './hike.service';
import { HikeDetailsComponent } from '../hike-details/hike-details.component';
import { HikePipePipe } from './hike-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [HikeListComponent,HikeDetailsComponent,HikePipePipe],
  providers: [HikeService],
  exports: [HikeListComponent]
})
export class HikeModule { }
