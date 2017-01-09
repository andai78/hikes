import { Component } from '@angular/core';
import { Hike } from './hike/hike';
import { HikeService } from './hike/hike.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hikes: Hike[];
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
