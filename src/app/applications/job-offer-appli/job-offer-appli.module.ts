import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "@app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { JobOfferMainPageComponent } from './job-offer-main-page/job-offer-main-page.component';

const routes: Routes = [
  {
    path:"",
    component: JobOfferMainPageComponent
},
  {
    path: "list",
    component: ListJobsComponent
  },
];

@NgModule({
  declarations: [ListJobsComponent, JobOfferMainPageComponent],
  imports: [
    CommonModule,
    SharedModule,
     RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class JobOfferAppliModule { }
