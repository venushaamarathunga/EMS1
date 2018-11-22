import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FrontPageComponent } from './front-page/front-page.component';
import { RcFrontPageComponent } from './rc-front-page/rc-front-page.component';
import { TeamFormComponent } from './team-form/team-form.component';
import { TeamRcViewComponent } from './team-rc-view/team-rc-view.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { EmployeeViewPageComponent } from './employee-view-page/employee-view-page.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { DetailsAddFormComponent } from './details-add-form/details-add-form.component';

 
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'frontpage', component: FrontPageComponent },
      { path: 'rcfrontpage', component: RcFrontPageComponent },
      { path: 'teamform', component: TeamFormComponent },
      { path: 'teamview', component: TeamRcViewComponent },
      { path: 'employeepage', component: EmployeePageComponent },
      { path: 'employeeview', component: EmployeeViewPageComponent },
      { path: 'detailsmatch', component: DetailsFormComponent },
      { path: 'detailsaddform', component: DetailsAddFormComponent },
    ])
  ],
  declarations: [FrontPageComponent, RcFrontPageComponent, TeamFormComponent, TeamRcViewComponent, EmployeePageComponent, EmployeeViewPageComponent, DetailsFormComponent, DetailsAddFormComponent]
})
export class CricketMatchModule { }