import { Component, OnInit } from '@angular/core';
import {User} from "../model/user.model";
import {Project} from "../model/project.model";
import {Task} from "../model/task.model";
import {ProjectmanagerService} from '../projectmanager.service';
import {ParentTask} from 'src/app/model/parenttask.model';
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms/src/directives/ng_form';
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
  disableparenttask:boolean;
  error:any={isError:false,errorMessage:''};
  saveSuccess: boolean;  
  alertMessage:string;
  ProjectFilter: any = {ProjectName: '' };
  UserFilter: any = {firstName: '' };
  ParentFilter: any = {Parent_Task: '' };
  title = 'add-task!';
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
      this.task.Start_Date =new Date();
      let tmpDate = new Date();
      tmpDate.setDate(tmpDate.getDate() + 1);
      this.task.End_Date =tmpDate;
      this.disableparenttask=true;
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
        this.task.Task_ID = data.Task_ID;
        this.task.TaskName = data.TaskName;
        this.task.Priority = data.Priority;
        this.task.Start_Date =  data.Start_Date; 
        this.task.End_Date = data.End_Date;
      });
    }

  SelectUser(user:User){
     this.task.User_ID = user.userId;
     this.task.UserName = user.firstName
  }


  SelectParent(parent:ParentTask){
    if(!this.disableparenttask)
    {
      this.task.Parent_ID = parent.Parent_ID;
      this.task.ParentName = parent.Parent_Task;
    }
 }

 SelectProject(project:Project){
  this.task.Project_ID = project.Project_ID;
  this.task.ProjectName = project.ProjectName;
}


compareTwoDates(){
  let startdate= Date.parse(this.task.Start_Date.toLocaleString().split(',')[0]);
  let enddate= Date.parse(this.task.End_Date.toLocaleString().split(',')[0]);
  if(enddate < startdate){
      this.error={isError:true,errorMessage:'End Date cant before Start date'};
  }
  else{

    this.error={isError:false,errorMessage:''};
  }
}
EnableParentTask(){
  if(this.disableparenttask)
  {
    this.disableparenttask=false;  
  }   
  else
  {
    this.disableparenttask=true;       
  }

}

  hideAlert()
  {
    this.saveSuccess = false;
    this.router.navigate(['ViewTask']);
    return false;
  }

  createTask(form:NgForm) {
    if( this.addorupdate =="Update")
    {
      this.updateTask(form);

    }
    else
    {
      this.projectmanagerservice.createTask(this.task)
      .subscribe( data => { 
        this.saveSuccess = true;  
        form.reset();
        this.alertMessage ="New Task Created successfully.";      
      }); 
    }   
  }

  updateTask(form:NgForm) {
    this.projectmanagerservice.updateTask(this.task)
      .subscribe( data => {
        this.saveSuccess = true;  
        form.reset();
        this.alertMessage ="Task Details Updated successfully.";      
      });    
  }

  resetForm(form:NgForm) {
    form.reset();
  }
}
