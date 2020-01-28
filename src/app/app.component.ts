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
        fullName:['',Validators.required],
        password:['',Validators.required],
        retypePassword:['',Validators.required],
        alternateMail:['',Validators.required],
        day:['',Validators.required],
        month:['',Validators.required],
        year:['',Validators.required],
        male:['',Validators.required],
        feMale:['',Validators.required],
        country:['',Validators.required],
        noAlternateId:['',Validators.required],

      }
    );
  }
  submit()
  {
    console.log(this.userFormGroup.value);
  }
}
