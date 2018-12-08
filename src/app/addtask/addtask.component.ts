import { Component, OnInit } from '@angular/core';
import {User} from "../model/user.model";
import {Project} from "../model/project.model";
import {Task} from "../model/task.model";
import {ProjectmanagerService} from '../projectmanager.service';
import {ParentTask} from 'src/app/model/parenttask.model';
import {Router} from "@angular/router";
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
  addorupdate: string ='Add';
  constructor(private router: Router,private projectmanagerservice:ProjectmanagerService) { }
 
  ngOnInit() {
    let taskId = localStorage.getItem("editTaskid");
    if(taskId!=null)
    {
      this.addorupdate ="Update";
      this.GetTaskbyId(taskId);
      localStorage.removeItem("editTaskid");
    }
    else{
      this.addorupdate ="Add";
    }
  
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
 
  GetTaskbyId(taskid) {    
    this.projectmanagerservice.getTaskById(taskid)
      .subscribe( data => {
        this.task.TaskName = data.TaskName;
        this.task.Priority = data.Priority;
        this.task.Start_Date = data.Start_Date.split('T')[0];
        this.task.End_Date = data.End_Date.split('T')[0];
      });
    }

  SelectUser(user:User){
     this.task.User_ID = user.userId;
     this.task.UserName = user.firstName
  }


  SelectParent(parent:ParentTask){
    this.task.Parent_ID = parent.Parent_ID;
    this.task.ParentName = parent.Parent_Task
 }

 SelectProject(project:Project){
  this.task.Project_ID = project.Project_ID;
  this.task.ProjectName = project.ProjectName;
}


  createTask() {
    if( this.addorupdate =="Update")
    {
      this.updateTask();

    }
    else
    {
      this.projectmanagerservice.createTask(this.task)
      .subscribe( data => {
        
      }); 
    }   
  }

  updateTask() {
    this.projectmanagerservice.updateTask(this.task)
      .subscribe( data => {
        this.router.navigate(['ViewTask']);
      });    
  }
}
