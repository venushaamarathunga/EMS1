import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

//import {  RepositoryService} from './../../ShareData/repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {
  
  constructor() { }

  public teamForm: FormGroup;

  ngOnInit() {
    this.teamForm = new FormGroup({
      teamName: new FormControl('',[Validators.required]),
      teamCaptainName: new FormControl('',[Validators.required]),
      teamCaptainId: new FormControl('',[Validators.required]),
      teamCaptainContact: new FormControl('',[Validators.required]),
      teamCaptainEmail: new FormControl('',[Validators.required]),
      teamMember: new FormControl('',[Validators.required]),

    })
  }

  public validateControl(controlName: string) {
    if (this.teamForm.controls[controlName].invalid && this.teamForm.controls[controlName].touched)
      return true;

    return false;
  }
  public hasError(controlName: string, errorName: string) {
    if (this.teamForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

  public teamData(value){
    console.log(value);
  }

}
