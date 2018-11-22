import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators} from '@angular/forms';
//import {  RepositoryService} from './../../ShareData/repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rc-front-page',
  templateUrl: './rc-front-page.component.html',
  styleUrls: ['./rc-front-page.component.css']
})
export class RcFrontPageComponent implements OnInit {

  constructor() { }
  public rcFront: FormGroup;
  
  ngOnInit() {
    this.rcFront = new FormGroup({
      rcFrontId: new FormControl('',[Validators.required]),
      rcFrontmainTopic: new FormControl('',[Validators.required]),
      rcFrontsubTopic: new FormControl('',[Validators.required]),
      rcFrontdate: new FormControl('',[Validators.required]),
      rcFronttime: new FormControl('',[Validators.required]),
      rcFrontplace: new FormControl('',[Validators.required]),
      rcFrontrLastday: new FormControl('',[Validators.required]),
      rcFrontcontent1: new FormControl('',[Validators.required]),
      rcFrontcontent2: new FormControl(''),

     })
  }

  public validateControl(controlName: string) {
    if (this.rcFront.controls[controlName].invalid && this.rcFront.controls[controlName].touched)
      return true;

    return false;
  }
  public hasError(controlName: string, errorName: string) {
    if (this.rcFront.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

  public rcFrontData(value){
    console.log(value);
  }
}
