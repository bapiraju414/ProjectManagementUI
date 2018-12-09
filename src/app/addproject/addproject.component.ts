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
  disabledate: boolean;
  order: string = 'project.ProjectName';
  reverse: boolean = false;
  ProjectFilter: any = {ProjectName: '' };
  error:any={isError:false,errorMessage:''};

  constructor(private orderPipe: OrderPipe,private projectmanagerservice:ProjectmanagerService) { }

  ngOnInit() {
    this.addorupdate="Add";
    this.disabledate=true;
    this.projectmanagerservice.getUsers()
    .subscribe( data => {
      this.users = data;
    });

      this.getProjectDetails();
    
  
  }

  SelectUser(user:User){
    this.project.User_Id = user.userId;
    this.project.UserName = user.firstName
 }

 compareTwoDates(){
   let startdate= Date.parse(this.project.Start_Date.toLocaleString().split(',')[0]);
   let enddate= Date.parse(this.project.End_Date.toLocaleString().split(',')[0]);
  if(enddate < startdate){
     this.error={isError:true,errorMessage:'End Date cant before Start date'};
  }
  else{

    this.error={isError:false,errorMessage:''};
  }
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

  suspendendProject(project: Project): void {
    project.Status=true;
    this.projectmanagerservice.updateProject(project)
      .subscribe( data => {       
      }); 
  };

  EditProject(project:Project) {
    this.addorupdate="Upadte";
    this.projectmanagerservice.getProjectsById(project.Project_ID)
      .subscribe( data => {
        this.project = data;
      });
    }
    EnableDates(){
      if(this.disabledate)
      {

        this.disabledate=false;
        this.project.Start_Date =new Date();
        let tmpDate = new Date();
        tmpDate.setDate(tmpDate.getDate() + 1);
        this.project.End_Date =tmpDate;
      }   
      else
      {
        this.disabledate=true;
        this.project.Start_Date =null;        
        this.project.End_Date =null;
        
      }

    }
    setOrder(value: string) {
      if (this.order === value) {
        this.reverse = !this.reverse;
      }        
      this.order = value;
      
    }
}
