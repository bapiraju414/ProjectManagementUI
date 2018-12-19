import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtaskComponent } from './viewtask.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { MockPipe } from '../model/MockPipe';
import { MockOrderby } from '../model/MockOrderby';
import {RouterTestingModule} from '@angular/router/testing'
describe('ViewtaskComponent', () => {
  let component: ViewtaskComponent;
  let fixture: ComponentFixture<ViewtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtaskComponent,MockPipe,MockOrderby ],imports:[BrowserModule,RouterTestingModule,FormsModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'view-task!'`, async(() => {
    const fixture = TestBed.createComponent(ViewtaskComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('view-task!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(ViewtaskComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('view-task!');
  }))

});
