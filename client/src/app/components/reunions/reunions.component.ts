import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ReunionService } from '../../reunion.service';
import { reunion } from '../../reunion';

@Component({
  selector: 'app-reunions',
  templateUrl: './reunions.component.html',
  styleUrls: ['./reunions.component.css'],
  providers:[ReunionService]
})
export class ReunionsComponent implements OnInit {
  reunions: reunion[];
  reunion: reunion;
  dater:Date;
  objetr:string;

  constructor(private reunionService: ReunionService,
    private router: Router            ){ }

  addReunion(){
const newReunion ={
  dater: this.dater,
  objetr: this.objetr,

}
this.reunionService.addReunions(newReunion).subscribe(reunion =>{
  this.reunions.push(reunion);
});

  }




   deleteReunion(id:any){
     var reunions = this.reunions;
     this.reunionService.deleteReunions(id).subscribe(data =>{
       if(data.n==1){
         for(var i = 0; i< reunions.length; i++){
           if(reunions[i]._id == id){
             reunions.splice(i,1);
           }
         }
       }
     })
   }
   afficher(){
 
    objet : this.objetr;
   }


  ngOnInit() {
  this.reunionService.getReunions().subscribe( reunions => this.reunions = reunions );
    
  }

}
