import { Injectable } from '@angular/core';
import {enableProdMode} from '@angular/core';


import { Http,Headers,Response,RequestOptions } from '@angular/http';
import {reunion } from './reunion';
import {map} from 'rxjs/operators';

enableProdMode();


@Injectable()


export class ReunionService {

  constructor(private http:Http) {}
   

   getReunions(){
     return this.http.get('http://localhost:3000/api/reunions').pipe(map(res =>  res.json()) );                         
   
   
    }

    addReunions(newReunion){
      var headers = new Headers();
      headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/api/reunion', newReunion,{headers:headers}).pipe(map(res => res.json()) );
    }

    deleteReunions(id){
     
    return this.http.delete('http://localhost:3000/api/reunion/'+id).pipe(map(res =>  res.json()) );
    }

}