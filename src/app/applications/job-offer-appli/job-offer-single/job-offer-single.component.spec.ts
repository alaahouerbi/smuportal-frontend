import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferSingleComponent } from './job-offer-single.component';

describe('JobOfferSingleComponent', () => {
  let component: JobOfferSingleComponent;
  let fixture: ComponentFixture<JobOfferSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOfferSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOfferSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
