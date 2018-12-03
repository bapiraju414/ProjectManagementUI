import { Component, OnInit } from '@angular/core';
import {User} from "../model/user.model";
import {Project} from "../model/project.model";
import {Task} from "../model/task.model";
import {ProjectmanagerService} from '../projectmanager.service';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  showprojects = false;
  user = new User();
  project=new Project();
  task = new Task();
  users:User[];
  constructor(private projectmanagerservice:ProjectmanagerService) { }
 
  ngOnInit() {
    this.projectmanagerservice.getUsers()
      .subscribe( data => {
        this.users = data;
      });      
   
  }
  showProjects(){
    this.showprojects = true;
  }

  SelectUser(user:User){
     this.project.User_Id = user.userId;
     this.project.UserName = user.firstName
  }

  createTask() {
    // this.projectmanagerservice.createTask(this.task)
    //   .subscribe( data => {
        
    //   });
    // }
    alert('Hi');
  }
}
