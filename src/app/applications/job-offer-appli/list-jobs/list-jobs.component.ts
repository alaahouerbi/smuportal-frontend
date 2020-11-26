import { Component, OnInit } from '@angular/core';
import { JobOffer, JobOfferServiceService } from '@app/shared';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  listOfJobs: BehaviorSubject<JobOffer[]>=new BehaviorSubject<JobOffer[]>([]);

  constructor(private jobOfferService:JobOfferServiceService) { }

  ngOnInit() {
    this.jobOfferService.getJobOffers().subscribe({
      next: (data:JobOffer[])=>this.listOfJobs.next(data),
      error: (data:any)=>console.log(data)
    })
  }

}
