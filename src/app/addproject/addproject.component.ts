import { Component, OnInit } from '@angular/core';
import {Project} from "../model/project.model";
import {User} from "../model/user.model";
import {ProjectmanagerService} from '../projectmanager.service';
@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  project=new Project();
  users:User[];
  constructor(private projectmanagerservice:ProjectmanagerService) { }

  ngOnInit() {
    this.projectmanagerservice.getUsers()
    .subscribe( data => {
      this.users = data;
    });      
 
  }

  SelectUser(user:User){
    this.project.User_Id = user.userId;
    this.project.UserName = user.firstName
 }
  createProject() {
    this.projectmanagerservice.createProject(this.project)
      .subscribe( data => {
        
      });
  }
}
