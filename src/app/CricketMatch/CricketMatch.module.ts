import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FrontPageComponent } from './front-page/front-page.component';
import { RcFrontPageComponent } from './rc-front-page/rc-front-page.component';
 
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild([
      { path: 'frontpage', component: FrontPageComponent }
    ])
  ],
  declarations: [FrontPageComponent, RcFrontPageComponent]
})
export class CricketMatchModule { }