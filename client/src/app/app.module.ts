import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"; 
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReunionsComponent } from './components/reunions/reunions.component';
import { HomeComponent } from './components/home/home.component';
import { PaimentComponent } from './components/paiment/paiment.component';
import { InfosComponent } from './components/infos/infos.component';



import { RouterModule} from '@angular/router';
import { from } from 'rxjs';
const appRoutes : Routes = [
  {path:'home', component: HomeComponent },
  {path:'contact', component: ContactsComponent },
  {path:'reunion', component: ReunionsComponent },
  {path:'paiment', component: PaimentComponent },
  {path:'infos', component: InfosComponent },
  
]

@NgModule({
  declarations: [
    
   
    AppComponent,
    ContactsComponent,
    NavbarComponent,
    ReunionsComponent,
    HomeComponent,
    PaimentComponent,
    InfosComponent
  ],
  imports: [
 
  
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
