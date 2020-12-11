import { Component, OnInit } from '@angular/core';
import { JobOffer, JobOfferServiceService } from '@app/shared';
import { BehaviorSubject, from } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  goToJobOffer(id:string){


    this.router.navigate(["/apps/jobs/joboffer",id]);
  }
  applyForJob(jobOfferID:string){
    this.jobOfferService.applyForJob(jobOfferID);
  }
  listOfJobs: BehaviorSubject<JobOffer[]>=new BehaviorSubject<JobOffer[]>([]);
  clicked:boolean[]=new Array(this.listOfJobs.getValue.length) ;
  constructor(private jobOfferService:JobOfferServiceService,private router:Router) { }

  ngOnInit() {
    this.jobOfferService.getJobOffers().subscribe({
      next: (data:JobOffer[])=>this.listOfJobs.next(data),
      error: (data:any)=>console.log(data)
    })
  }

}
