import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';

const routes: Routes = [
  {
    path: 'AddProject',
    component:AddprojectComponent,
  },
  {
    path: 'AddTask',
    component:AddtaskComponent,  
  },
  {
    path: 'AddUser',
    component:AdduserComponent,
  },
  {
    path: 'ViewTask',
    component:ViewtaskComponent,
  },
  {
    path: '',
    component:AddprojectComponent,
  }

];

@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    AdduserComponent,
    AddprojectComponent,
    ViewtaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    OrderModule,
    FilterPipeModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
