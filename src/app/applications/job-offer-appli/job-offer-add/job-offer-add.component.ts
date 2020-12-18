import { Component, OnInit } from '@angular/core';
import { FormBuilder,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { JobOffer, JobOfferServiceService } from '@app/shared';
@Component({
  selector: 'app-job-offer-add',
  templateUrl: './job-offer-add.component.html',
  styleUrls: ['./job-offer-add.component.css']
})
export class JobOfferAddComponent implements OnInit {

  jobForm;
  jobAdded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private formBuilder: FormBuilder, private jobOfferService: JobOfferServiceService,
   private router: Router) {
    this.jobForm = this.formBuilder.group({
      Title: "",
      description: ""
    })
  }

  ngOnInit() {
  }
  onSubmit(jobOffer){

    console.warn("job Offer:",jobOffer);
    this.jobOfferService.addJobOffer(jobOffer);
    this.jobAdded.next(true);
    this.jobForm.reset();
  }
}
