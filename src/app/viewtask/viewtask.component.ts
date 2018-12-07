import { Component, OnInit } from '@angular/core';
import {Task} from "../model/task.model";
import {ProjectmanagerService} from '../projectmanager.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {

  tasks:Task[];
  projects:any;
  constructor(private projectmanagerservice:ProjectmanagerService) { }

  ngOnInit() {
    this.projectmanagerservice.GetTaskDetails()
    .subscribe( data => {
      this.tasks = data;
    });  

    this.projectmanagerservice.getProjects()
    .subscribe( data => {
      this.projects = data;
    });  
    
  }

}
