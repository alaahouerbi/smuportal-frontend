import { Component, OnInit, Input } from "@angular/core";
import { JobOffer, JobOfferServiceService } from "@app/shared";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { UserActionsComponent } from "@app/shared/user-actions";
@Component({
  selector: "app-job-offer-single",
  templateUrl: "./job-offer-single.component.html",
  styleUrls: ["./job-offer-single.component.css"]
})
export class JobOfferSingleComponent implements OnInit {
  //jobOffer:Observable<JobOffer[]>;
  jobOffer: BehaviorSubject<JobOffer[]>;
  @Input() id: string;
  data: any;
  constructor(
    private jobOfferService: JobOfferServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");

    });

    this.jobOfferService.getJobOffer(this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.data = {
          title: data.title,
          description: data.description,
          JobApps: data.JobApps,
          User:data.User
        };
      }
    });
  }

}
