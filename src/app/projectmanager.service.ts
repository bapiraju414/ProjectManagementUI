import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./model/user.model";
import {Task} from "./model/task.model";
import { Project } from 'src/app/model/project.model';
import {ParentTask} from 'src/app/model/parenttask.model';
@Injectable({
  providedIn: 'root'
})
export class ProjectmanagerService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/ProjectManager.ServiceLayer';
 // baseUrl: string = ' http://localhost:54141';
 
  getTasks() {
    return this.http.get<Task[]>(this.baseUrl+'/api/GetTasks');
  }

  GetTaskDetails() {
    return this.http.get<Task[]>(this.baseUrl+'/api/GetTaskDetails');
  }

  GetProjectDetails() {
    return this.http.get<Project[]>(this.baseUrl+'/api/GetProjectDetails');
  }
  
  getParentTasks() {
    return this.http.get<ParentTask[]>(this.baseUrl+'/api/GetParentTask');
  }

  getTaskById(id: number) {
    return this.http.get<Task>(this.baseUrl + '/api/GetTasksById/' + id);
  }

  getTaskByProjectId(id: number) {
    return this.http.get<Task[]>(this.baseUrl + '/api/GetTasksByProjectId/' + id);
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
    return this.http.post(this.baseUrl+'/api/AddUser', user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl +'/api/UpdateUser', user);
  }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl+'/api/GetUsers');
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/api/GetUserById/' + id);
  }
  deleteUserById(id: number) {
    return this.http.delete(this.baseUrl + '/api/DeleteUser/' + id);
  }

  getProjects() {
    return this.http.get<Project[]>(this.baseUrl+'/api/GetProjects');
  }

  getProjectsById(id: number) {
    return this.http.get<Project>(this.baseUrl + '/api/GetProjectById/' + id);
  }
  
  createProject(project: Project) {
    return this.http.post(this.baseUrl+'/api/AddProject', project);
  } 

  updateProject(project: Project) {
    return this.http.put(this.baseUrl +'/api/UpdateProject', project);
  }

  SuspendTProject(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
