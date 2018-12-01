import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./model/user.model";
import {Task} from "./model/task.model";
import {Project} from "./model/task.model";
import { Project } from 'src/app/model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectmanagerService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/TaskManager';

  getTasks() {
    return this.http.get<Task[]>(this.baseUrl+'/api/GetTaskColection');
  }

  getTaskById(id: number) {
    return this.http.get<Task>(this.baseUrl + '/api/GetTaskyByID/' + id);
  }
  
  createTask(task: Task) {
    return this.http.post(this.baseUrl+'/api/AddTask', task);
  } 

  updateTask(task: Task) {
    return this.http.put(this.baseUrl +'/api/UpdateTask', task);
  }

  endTask(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl+'/api/AddTask', user);
  }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl+'/api/GetTaskColection');
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/api/GetTaskyByID/' + id);
  }
  deleteUserById(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  getProjects() {
    return this.http.get<Project[]>(this.baseUrl+'/api/GetTaskColection');
  }

  getProjectsById(id: number) {
    return this.http.get<Task>(this.baseUrl + '/api/GetTaskyByID/' + id);
  }
  
  createProject(project: Project) {
    return this.http.post(this.baseUrl+'/api/AddTask', project);
  } 

  updateProject(project: Project) {
    return this.http.put(this.baseUrl +'/api/UpdateTask', project);
  }

  SuspendTProject(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
