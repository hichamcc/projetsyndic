import { Injectable } from '@angular/core';
import {enableProdMode} from '@angular/core';


import { Http,Headers,Response,RequestOptions } from '@angular/http';
import {contact } from './contact';
import {map} from 'rxjs/operators';

enableProdMode();


@Injectable()


export class ContactService {

  constructor(private http:Http) {}
   

   getContacts(){
     return this.http.get('http://localhost:3000/api/contacts').pipe(map(res =>  res.json()) );                         
   
   
    }

    addContacts(newContact){
      var headers = new Headers();
      headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact,{headers:headers}).pipe(map(res => res.json()) );
    }

    deleteContacts(id){
     
    return this.http.delete('http://localhost:3000/api/contact/'+id).pipe(map(res =>  res.json()) );
    }

}
