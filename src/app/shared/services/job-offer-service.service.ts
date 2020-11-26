import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobOffer } from '../models/jobOffer.model';

@Injectable({
  providedIn: 'root'
})
export class JobOfferServiceService {

  constructor(private httpClient: HttpClient) { }

  getJobOffers(): Observable<JobOffer[]> {
    return this.httpClient.get<JobOffer[]>("http://localhost:3000/api/user/getjobOffer");
  }
}
