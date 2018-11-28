import { Component, OnInit } from '@angular/core';
import {User} from "../model/user.model";
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user = new User();
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    alert('SUCCESS!! :-');
  }

  resetForm(form:NgForm) {
    form.reset();
  }
}
