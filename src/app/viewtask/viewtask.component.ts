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
  filteredList:any[]

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

  assignCopy() {
    this.filteredList = Object.assign([], this.tasks);   
  }

  setOrder(value: string) {
    if (value == 'user.task.Start_Date') {

      this.filteredList.sort((a, b) => {

        if (a.Start_Date < b.Start_Date) return -1;

        else if (a.Start_Date > b.Start_Date) return 1;

        else return 0;

      });

    }
  }

}
