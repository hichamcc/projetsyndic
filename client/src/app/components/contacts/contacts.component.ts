import { Component, OnInit , Input} from '@angular/core';
import {Router} from '@angular/router';
import {ContactService} from '../../contact.service';
import { contact } from '../../contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]

})
export class ContactsComponent implements OnInit {
 
  contacts: contact[];
  contact: contact;
  name:string;
  tel:string;
  appart: string;
  code:string;
  
  constructor(private contactService: ContactService,
    private router: Router            ){ }

  addContact(){
const newContact ={
  name: this.name,
  tel: this.tel,
  appart: this.appart,
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