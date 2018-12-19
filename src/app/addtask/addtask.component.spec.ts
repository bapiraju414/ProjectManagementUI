import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtaskComponent } from './addtask.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { MockPipe } from '../model/MockPipe';
import { MockOrderby } from '../model/MockOrderby';
import {RouterTestingModule} from '@angular/router/testing'
describe('AddtaskComponent', () => {
  let component: AddtaskComponent;
  let fixture: ComponentFixture<AddtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtaskComponent,MockPipe,MockOrderby],imports:[BrowserModule,RouterTestingModule,FormsModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'add-task!'`, async(() => {
    const fixture = TestBed.createComponent(AddtaskComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('add-task!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AddtaskComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('add-task!');
  }))

});
