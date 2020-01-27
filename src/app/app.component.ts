import { Component,OnInit} from '@angular/core';
import {User} from './user.modal';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  user:User=new User();
  userFormGroup:FormGroup;

  constructor(private formBuilder:FormBuilder)
  {

  }
  ngOnInit()
  {
    this.userFormGroup=this.formBuilder.group
    (
      {
        firstName:['',Validators.required],
        lastName:'',
        email:'',
        password:'',
        mobileNo:'',
        day:'',
        month:'',
        year:'',
        gender:''

      }
    )
  }
  submit()
  {
    console.log(this.userFormGroup.value);
  }
}
