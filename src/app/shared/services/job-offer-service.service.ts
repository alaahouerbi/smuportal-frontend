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
  getJobOffer(id:string):Observable<JobOffer[]>{
    return this.httpClient.get<JobOffer[]>('http://localhost:3000/api/user/getjobOffer/'+id);
  }
  getJobOffers(): Observable<JobOffer[]> {
    return this.httpClient.get<JobOffer[]>('http://localhost:3000/api/user/getJobOffer');
  }
  addJobOffer(jobOffer:JobOffer):void{
    this.httpClient.post<any>('http://localhost:3000/api/user/addjobOffer',jobOffer).subscribe({
      next: (data: any) => {
        this.addNewJob(jobOffer);
        console.log(data);
       },
       error: (data: any) => console.warn(data)

    })
  }
  private addNewJob(joboffer:JobOffer){
    const jobs:JobOffer[]=this.listOfJobs.getValue();
    jobs.push(joboffer);
    this.listOfJobs.next(jobs);
  }
}
