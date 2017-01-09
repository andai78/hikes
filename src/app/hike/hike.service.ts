import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Hike } from './hike';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class HikeService {
  constructor(private _http:Http) {

   }
  
  /*getHikes(){
      return this.hikes;
  }*/
  getHikesFromApi(){
      return this._http.get('app/api/hikes.json')
        .do(response => console.log(response))
        .map(hikes => hikes.json())
  }
}
