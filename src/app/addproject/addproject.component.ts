import { Component, OnInit } from '@angular/core';
import {Project} from "../model/project.model";
import {User} from "../model/user.model";
import {ProjectmanagerService} from '../projectmanager.service';
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  project=new Project();
  users:User[];
  projects:Project[];
  addorupdate: string ='Add';
  StartEndDateSelected: boolean;
  order: string = 'project.ProjectName';
  reverse: boolean = false;
  ProjectFilter: any = {ProjectName: '' };
  constructor(private orderPipe: OrderPipe,private projectmanagerservice:ProjectmanagerService) { }

  ngOnInit() {
    this.addorupdate="Add";
    this.projectmanagerservice.getUsers()
    .subscribe( data => {
      this.users = data;
    });

      this.getProjectDetails();
    
    this.project.Start_Date =new Date();
    let tmpDate = new Date();
    tmpDate.setDate(tmpDate.getDate() + 1);
    this.project.End_Date =tmpDate;
  }

  SelectUser(user:User){
    this.project.User_Id = user.userId;
    this.project.UserName = user.firstName
 }

  getProjectDetails(){

    this.projectmanagerservice.GetProjectDetails()
    .subscribe( data => {
      this.projects = data;
    }); 
 

  }
  createProject() {
    if(this.addorupdate == "Add")
    {
    this.projectmanagerservice.createProject(this.project)
      .subscribe( data => {
         this.getProjectDetails();
      });
    }
    else
    {

      this.projectmanagerservice.updateProject(this.project)
      .subscribe( data => {
        this.getProjectDetails();
      });
    }
    
  }

  EditProject(project:Project) {
    this.addorupdate="Upadte";
    this.projectmanagerservice.getProjectsById(project.Project_ID)
      .subscribe( data => {
        this.project = data;
      });
    }

    setOrder(value: string) {
      if (this.order === value) {
        this.reverse = !this.reverse;
      }        
      this.order = value;
      
    }
}
