import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-offer-main-page',
  templateUrl: './job-offer-main-page.component.html',
  styleUrls: ['./job-offer-main-page.component.css']
})
export class JobOfferMainPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToAdd(){
    this.router.navigate(["/apps/jobs/addjob"]);

  }
}
