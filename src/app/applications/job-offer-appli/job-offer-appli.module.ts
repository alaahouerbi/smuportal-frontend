import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "@app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { JobOfferMainPageComponent } from './job-offer-main-page/job-offer-main-page.component';
import { JobOfferSingleComponent } from './job-offer-single/job-offer-single.component';

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
  }
];

@NgModule({
  declarations: [ListJobsComponent, JobOfferMainPageComponent, JobOfferSingleComponent],
  imports: [
    CommonModule,
    SharedModule,
     RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class JobOfferAppliModule { }
