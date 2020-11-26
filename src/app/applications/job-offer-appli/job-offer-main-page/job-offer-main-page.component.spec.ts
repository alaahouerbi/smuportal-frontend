import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferMainPageComponent } from './job-offer-main-page.component';

describe('JobOfferMainPageComponent', () => {
  let component: JobOfferMainPageComponent;
  let fixture: ComponentFixture<JobOfferMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOfferMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOfferMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
