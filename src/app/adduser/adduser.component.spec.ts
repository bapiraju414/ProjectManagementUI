import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { AdduserComponent } from './adduser.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { MockPipe } from '../model/MockPipe';
import { MockOrderby } from '../model/MockOrderby';
import {ProjectmanagerService} from '../projectmanager.service';

describe('AdduserComponent', () => {
  let component: AdduserComponent;
  let fixture: ComponentFixture<AdduserComponent>;
  let service: ProjectmanagerService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduserComponent,MockPipe,MockOrderby],imports:[BrowserModule,HttpClientTestingModule,FormsModule,HttpClientModule],
      providers: [ProjectmanagerService]
    })
    .compileComponents();
    
     service = TestBed.get(ProjectmanagerService);
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'add-user!'`, async(() => {
    const fixture = TestBed.createComponent(AdduserComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('add-user!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AdduserComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('add-user!');
  }));


});
