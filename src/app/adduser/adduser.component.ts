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
  constructor(private orderPipe: OrderPipe,private filterPipe: FilterPipe,private projectmanagerservice:ProjectmanagerService) { }

  ngOnInit() {
    this.projectmanagerservice.getUsers()
      .subscribe( data => {
        this.users = data;
      });
      
  }
  onSubmit() {
    
  }

  resetForm() {
    this.form.reset();
  }

  createUser() {
    this.projectmanagerservice.createUser(this.user)
      .subscribe( data => {
        
      });
    }
    EditUser(user:User) {
      this.projectmanagerservice.getUserById(user.userId)
        .subscribe( data => {
          this.user = data;
        });
      }

      setOrder(value: string) {
        if (this.order === value) {
          this.reverse = !this.reverse;
        }
        // console.log(this.users);
        // this.orderPipe.transform(this.users, 'user.firstName');
        // console.log(this.users);
        this.order = value;
      }
}
