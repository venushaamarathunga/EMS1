import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, EmailValidator } from '@angular/forms';

//import {  RepositoryService} from './../../ShareData/repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-add-form',
  templateUrl: './details-add-form.component.html',
  styleUrls: ['./details-add-form.component.css']
})
export class DetailsAddFormComponent implements OnInit {

  public detailsAddForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.detailsAddForm = new FormGroup({
      addyear: new FormControl('',[Validators.required]),
      addwinner: new FormControl('',[Validators.required]),
      addrunnerup: new FormControl('',[Validators.required]),
      addnumberTeam: new FormControl('',[Validators.required]),
      addbestplayer: new FormControl('',[Validators.required]),
      addbestbatter: new FormControl('',[Validators.required]),
      addbestballer: new FormControl('',[Validators.required]),
    })
  }

  public validateControl(controlName: string) {
    if (this.detailsAddForm.controls[controlName].invalid && this.detailsAddForm.controls[controlName].touched)
      return true;

    return false;
  }
  public hasError(controlName: string, errorName: string) {
    if (this.detailsAddForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

  public detailsAddData(value){
    console.log(value);
  }

}
