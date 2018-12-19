import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectComponent } from './addproject.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { MockPipe } from '../model/MockPipe';
import { MockOrderby } from '../model/MockOrderby';

describe('AddprojectComponent', () => {
  let component: AddprojectComponent;
  let fixture: ComponentFixture<AddprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprojectComponent,MockPipe,MockOrderby],imports:[BrowserModule,FormsModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'add-project!'`, async(() => {
    const fixture = TestBed.createComponent(AddprojectComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('add-project!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AddprojectComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('add-project!');
  }))

});
