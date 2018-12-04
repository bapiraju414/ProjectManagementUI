import { Component, OnInit } from '@angular/core';
import {User} from "../model/user.model";
import {Project} from "../model/project.model";
import {Task} from "../model/task.model";
import {ProjectmanagerService} from '../projectmanager.service';
import {ParentTask} from 'src/app/model/parenttask.model';
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
  parenttasks:any[];
  projects:any[];
  constructor(private projectmanagerservice:ProjectmanagerService) { }
 
  ngOnInit() {
    this.projectmanagerservice.getUsers()
      .subscribe( data => {
        this.users = data;
      });  
      
      this.projectmanagerservice.getParentTasks()
      .subscribe( data => {
        this.parenttasks = data;
      });    
      
      this.projectmanagerservice.getProjects()
      .subscribe( data => {
        this.projects = data;
      });  
   
  }
 

  SelectUser(user:User){
     this.project.User_Id = user.userId;
     this.project.UserName = user.firstName
  }


  SelectParent(parent:ParentTask){
    this.project.Parent_ID = parent.Parent_ID;
    this.project.ParentName = parent.Parent_Task
 }

 SelectProject(project:Project){
  this.project.Project_ID = project.Project_ID;
  this.project.ProjectName = project.ProjectName;
}


  createTask() {
    // this.projectmanagerservice.createTask(this.task)
    //   .subscribe( data => {
        
    //   });
    // }
    alert('Hi');
  }
}
