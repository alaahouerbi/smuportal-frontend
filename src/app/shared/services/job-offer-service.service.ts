import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JobOffer } from '../models/jobOffer.model';

@Injectable({
  providedIn: 'root'
})
export class JobOfferServiceService {
  listOfJobs:BehaviorSubject<JobOffer[]>=new BehaviorSubject<JobOffer[]>([]);

  constructor(private httpClient: HttpClient) { }
  applyForJob(jobOffer: string):void{
    this.httpClient.post<any>('http://localhost:3000/api/user/applyForJob/'+jobOffer,null).subscribe()
  }

  getJobOffers(): Observable<JobOffer[]> {
    return this.httpClient.get<JobOffer[]>("http://localhost:3000/api/user/getjobOffer");
  }
}
