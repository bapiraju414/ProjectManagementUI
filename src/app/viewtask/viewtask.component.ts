import { Component, OnInit } from '@angular/core';
import {Task} from "../model/task.model";
import {ProjectmanagerService} from '../projectmanager.service';
import {Project} from "../model/project.model";
import {Router} from "@angular/router";
import { OrderPipe } from 'ngx-order-pipe';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {

  tasks:Task[];
  projects:Project[];
  task = new Task();;
  project:Project;
  order: string = 'project.ProjectName';
  reverse: boolean = false;
  ProjectFilter: any = {ProjectName: '' };
  filteredList:any[];
  ProjectModalFilter: any = {ProjectName: '' };
  constructor(private orderPipe: OrderPipe,private filterPipe: FilterPipe,private router: Router,private projectmanagerservice:ProjectmanagerService) { }

  ngOnInit() {
    // this.projectmanagerservice.GetTaskDetails()
    // .subscribe( data => {
    //   this.tasks = data;
    // });  
  
    this.projectmanagerservice.getProjects()
    .subscribe( data => {
      this.projects = data;
    });  
    
  }

  SelectProject(project:Project){
    this.task.Project_ID = project.Project_ID;
    this.task.ProjectName = project.ProjectName;

     this.projectmanagerservice.getTaskByProjectId(project.Project_ID)
    .subscribe( data => {
      this.tasks = data;
      this.assignCopy();
    }); 
    
  }
  
  editTask(task: any): void {
    localStorage.removeItem("editTaskid");
    localStorage.setItem("editTaskid", task.Task_ID.toString());
    this.router.navigate(['AddTask']);
  };

  endTask(task: Task): void {
    task.Status=true;
    this.projectmanagerservice.updateTask(task)
      .subscribe( data => {
        this.router.navigate(['ViewTask']);
      }); 
  };

  assignCopy() {
    this.filteredList = Object.assign([], this.tasks);   
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }        
    this.order = value;
  }

}
