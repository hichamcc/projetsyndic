import { Component, OnInit , Input} from '@angular/core';

import {ContactService} from '../contact.service';
import { contact } from '../contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]

})
export class ContactsComponent implements OnInit {
 
  contacts: contact[];
  contact: contact;
  first_name:string;
  last_name:string;
  code:string;
  
  constructor(private contactService: ContactService){ }

  addContact(){
const newContact ={
  first_name: this.first_name,
  last_name: this.last_name,
  code: this.code
}
this.contactService.addContacts(newContact).subscribe(contact =>{
  this.contacts.push(contact);
});

  }




   deleteContact(id:any){
     var contacts = this.contacts;
     this.contactService.deleteContacts(id).subscribe(data =>{
       if(data.n==1){
         for(var i = 0; i< contacts.length; i++){
           if(contacts[i]._id == id){
             contacts.splice(i,1);
           }
         }
       }
     })
   }


  ngOnInit() {
  this.contactService.getContacts().subscribe( contacts => this.contacts = contacts );
    
  }

}