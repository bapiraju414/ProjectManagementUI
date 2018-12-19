import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { ProjectmanagerService } from './projectmanager.service';
import { request } from 'http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

let service: ProjectmanagerService;
let httpmok:HttpTestingController;

describe('ProjectmanagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectmanagerService],imports:[BrowserModule,HttpClientTestingModule,FormsModule,HttpClientModule]
    });

    service = TestBed.get(ProjectmanagerService);
    httpmok = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpmok.verify();
  });

  // it('should be created', inject([ProjectmanagerService], (service: ProjectmanagerService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should get users',(() => {
      
    const dummyUsers =[{"userId":1,"firstName":"Bapiraju","lastName":"Uddaraju","employeeId":227004},
                       {"userId":2,"firstName":"Ajay","lastName":"Abbaraju","employeeId":227005}];
    service.getUsers().subscribe(users => {
      expect(users.length).toBe(2);
    });

    const request = httpmok.expectOne(service.baseUrl+'/api/GetUsers')
    expect(request.request.method).toBe('GET');
    request.flush(dummyUsers);
  }));

  it('should get user by Id',(() => {
      
    const dummyUser ={"userId":1,"firstName":"Bapiraju","lastName":"Uddaraju","employeeId":227004,"projectId":null,"taskId":null};
    service.getUserById(1).subscribe(user => {
      expect(user != null);
    });

    const request = httpmok.expectOne(service.baseUrl+'/api/GetUserById/1')
    expect(request.request.method).toBe('GET');
    request.flush(dummyUser);
  }));


  it('should get task by Id',(() => {
      
    const dummyTask ={"Task_ID":1,"Parent_ID":null,"Project_ID":null,"TaskName":"Task11","Start_Date":"2018-12-06T00:00:00","End_Date":"2018-12-12T00:00:00","Priority":20,"Status":false,"User_ID":0};
    service.getTaskById(1).subscribe(task => {
      expect(task != null);
    });

    const request = httpmok.expectOne(service.baseUrl+'/api/GetTasksById/1')
    expect(request.request.method).toBe('GET');
    request.flush(dummyTask);
  }));

  
  it('should get task',(() => {
      
    const dummyTasks =[{"Task_ID":1,"Parent_ID":2,"Project_ID":1,"TaskName":"Task11","Start_Date":"2018-12-06T00:00:00","End_Date":"2018-12-12T00:00:00","Priority":20,"Status":false},{"Task_ID":2,"Parent_ID":2,"Project_ID":2,"TaskName":"Task2","Start_Date":"2018-12-05T00:00:00","End_Date":"2018-12-06T00:00:00","Priority":15,"Status":true},{"Task_ID":3,"Parent_ID":2,"Project_ID":2,"TaskName":"Task3","Start_Date":"2018-12-06T00:00:00","End_Date":"2018-12-07T00:00:00","Priority":15,"Status":false},{"Task_ID":4,"Parent_ID":1,"Project_ID":1,"TaskName":"Task4","Start_Date":"2018-12-05T00:00:00","End_Date":"2018-12-06T00:00:00","Priority":15,"Status":false},{"Task_ID":5,"Parent_ID":2,"Project_ID":1,"TaskName":"Task1","Start_Date":"2018-12-05T00:00:00","End_Date":"2018-12-12T00:00:00","Priority":20,"Status":false},{"Task_ID":6,"Parent_ID":2,"Project_ID":1,"TaskName":"Task6","Start_Date":"2018-12-07T00:00:00","End_Date":"2018-12-09T00:00:00","Priority":15,"Status":false}];
    service.getTasks().subscribe(tasks => {
      expect(tasks.length).toBe(6);
    });

    const request = httpmok.expectOne(service.baseUrl+'/api/GetTasks')
    expect(request.request.method).toBe('GET');
    request.flush(dummyTasks);
  }));

  it('should get taskdetails',(() => {
      
    const dummyTasks =[{"Task_ID":1,"Parent_ID":2,"Project_ID":1,"TaskName":"Task11","Start_Date":"2018-12-06T00:00:00","End_Date":"2018-12-12T00:00:00","Priority":20,"Status":false},{"Task_ID":2,"Parent_ID":2,"Project_ID":2,"TaskName":"Task2","Start_Date":"2018-12-05T00:00:00","End_Date":"2018-12-06T00:00:00","Priority":15,"Status":true},{"Task_ID":3,"Parent_ID":2,"Project_ID":2,"TaskName":"Task3","Start_Date":"2018-12-06T00:00:00","End_Date":"2018-12-07T00:00:00","Priority":15,"Status":false},{"Task_ID":4,"Parent_ID":1,"Project_ID":1,"TaskName":"Task4","Start_Date":"2018-12-05T00:00:00","End_Date":"2018-12-06T00:00:00","Priority":15,"Status":false},{"Task_ID":5,"Parent_ID":2,"Project_ID":1,"TaskName":"Task1","Start_Date":"2018-12-05T00:00:00","End_Date":"2018-12-12T00:00:00","Priority":20,"Status":false},{"Task_ID":6,"Parent_ID":2,"Project_ID":1,"TaskName":"Task6","Start_Date":"2018-12-07T00:00:00","End_Date":"2018-12-09T00:00:00","Priority":15,"Status":false}];
    service.GetTaskDetails().subscribe(tasks => {
      expect(tasks.length).toBe(6);
    });

    const request = httpmok.expectOne(service.baseUrl+'/api/GetTaskDetails')
    expect(request.request.method).toBe('GET');
    request.flush(dummyTasks);
  }));


  it('should get projectdetails',(() => {
      
    const dummyProjects =[{"Project_ID":1,"ProjectName":"Project22","Start_Date":"2018-12-22T00:00:00","End_Date":"2018-12-20T00:00:00","Priority":20,"NoofTasks":4,"completedtask":0},{"Project_ID":2,"ProjectName":"Project2","Start_Date":"2018-12-05T00:00:00","End_Date":"2018-12-06T00:00:00","Priority":25,"NoofTasks":1,"completedtask":0},{"Project_ID":3,"ProjectName":"Project1","Start_Date":"2018-12-04T00:00:00","End_Date":"2018-12-20T00:00:00","Priority":15,"NoofTasks":0,"completedtask":0},{"Project_ID":1003,"ProjectName":"Project11","Start_Date":"2018-12-22T00:00:00","End_Date":"2018-12-20T00:00:00","Priority":25,"NoofTasks":0,"completedtask":0},{"Project_ID":1004,"ProjectName":"Project11","Start_Date":"2018-12-22T00:00:00","End_Date":"2018-12-20T00:00:00","Priority":20,"NoofTasks":0,"completedtask":0},{"Project_ID":2,"ProjectName":"Project2","Start_Date":"2018-12-05T00:00:00","End_Date":"2018-12-06T00:00:00","Priority":25,"NoofTasks":1,"completedtask":1}];
    service.GetProjectDetails().subscribe(projects => {
      expect(projects.length).toBe(6);
    });

    const request = httpmok.expectOne(service.baseUrl+'/api/GetProjectDetails')
    expect(request.request.method).toBe('GET');
    request.flush(dummyProjects);
  }));

  it('should get ParentTaks',(() => {
      
    const dummyParents =[{"Parent_ID":1,"Parent_Task":"ParentTask1"},{"Parent_ID":2,"Parent_Task":"ParentTask2"}];
    service.getParentTasks().subscribe(parenttasks => {
      expect(parenttasks.length).toBe(2);
    });

    const request = httpmok.expectOne(service.baseUrl+'/api/GetParentTask')
    expect(request.request.method).toBe('GET');
    request.flush(dummyParents);
  }));

  it('should get Projects',(() => {
      
    const dummyProjects =[{"Project_ID":1,"ProjectName":"Project22","Start_Date":"2018-12-22T00:00:00","End_Date":"2018-12-20T00:00:00","Priority":20,"Status":false},{"Project_ID":2,"ProjectName":"Project2","Start_Date":"2018-12-05T00:00:00","End_Date":"2018-12-06T00:00:00","Priority":25,"Status":false},{"Project_ID":3,"ProjectName":"Project1","Start_Date":"2018-12-04T00:00:00","End_Date":"2018-12-20T00:00:00","Priority":15,"Status":false},{"Project_ID":1003,"ProjectName":"Project11","Start_Date":"2018-12-22T00:00:00","End_Date":"2018-12-20T00:00:00","Priority":25,"Status":false},{"Project_ID":1004,"ProjectName":"Project11","Start_Date":"2018-12-22T00:00:00","End_Date":"2018-12-20T00:00:00","Priority":20,"Status":false}];
    service.getProjects().subscribe(projects => {
      expect(projects.length).toBe(5);
    });

    const request = httpmok.expectOne(service.baseUrl+'/api/GetProjects')
    expect(request.request.method).toBe('GET');
    request.flush(dummyProjects);
  }));

});
