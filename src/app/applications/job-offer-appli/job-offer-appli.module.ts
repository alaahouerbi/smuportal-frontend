import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "@app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { JobOfferMainPageComponent } from './job-offer-main-page/job-offer-main-page.component';
import { JobOfferSingleComponent } from './job-offer-single/job-offer-single.component';
import { JobOfferAddComponent } from './job-offer-add/job-offer-add.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:"",
    component: JobOfferMainPageComponent
},
  {
    path: "list",
    component: ListJobsComponent
  },
  {
    path:'joboffer/:id',
    component: JobOfferSingleComponent
  },{
  path:'addjob',
  component: JobOfferAddComponent}
];

@NgModule({
  declarations: [ListJobsComponent, JobOfferMainPageComponent, JobOfferSingleComponent, JobOfferAddComponent],
  imports: [

    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
     RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class JobOfferAppliModule { }
