import { Component, OnInit } from '@angular/core';
import {User} from "../model/user.model";
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {ProjectmanagerService} from '../projectmanager.service';
import { OrderPipe } from 'ngx-order-pipe';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user = new User();
  users:User[];
  order: string = 'user.firstName';
  reverse: boolean = false;
  userFilter: any = {firstName: '' };
  form:NgForm;
  addorupdate: string ='Add';
  constructor(private orderPipe: OrderPipe,private filterPipe: FilterPipe,private projectmanagerservice:ProjectmanagerService) { }

  ngOnInit() {
    this.addorupdate="Add";
    this.getUser();
      
  }
  onSubmit() {
    
  }

  resetForm() {
    this.form.reset();
  }

  getUser(){
    this.projectmanagerservice.getUsers()
    .subscribe( data => {
      this.users = data;
    });
  }

  deleteUser(user:User){
    this.projectmanagerservice.deleteUserById(user.userId)
    .subscribe( data => { 
      this.getUser()    
    });
   
  }
  createUser() {
    if(this.addorupdate == "Add")
    {
      this.projectmanagerservice.createUser(this.user)
      .subscribe( data => { 
        this.getUser()       
      });     
      
    }
    else
    {
      this.projectmanagerservice.updateUser(this.user)
      .subscribe( data => {  
       this.getUser();      
      });
    
    }
    
  }
    EditUser(user:User) {
      this.addorupdate="Upadte";
      this.projectmanagerservice.getUserById(user.userId)
        .subscribe( data => {
          this.user = data;
        });
      }

      setOrder(value: string) {
        if (this.order === value) {
          this.reverse = !this.reverse;
        }        
        this.order = value;
      }
}
