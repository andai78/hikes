import { Component, OnInit } from '@angular/core';
import { Hike } from '../hike/hike';
import { HikeService } from '../hike/hike.service'; 

@Component({
  selector: 'app-hike-list',
  templateUrl: './hike-list.component.html',
  styleUrls: ['./hike-list.component.css']
})
export class HikeListComponent implements OnInit {

  hikes: Hike[];
  search: string;
  constructor(private _hikeService: HikeService){
    
  }
  ngOnInit(){
    this._hikeService.getHikesFromApi()
        .subscribe(
          resp => this.hikes = resp,
          error => console.error(error.status) 
          );
  }
}
