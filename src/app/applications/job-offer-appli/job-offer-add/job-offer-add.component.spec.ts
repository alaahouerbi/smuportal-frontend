import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferAddComponent } from './job-offer-add.component';

describe('JobOfferAddComponent', () => {
  let component: JobOfferAddComponent;
  let fixture: ComponentFixture<JobOfferAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOfferAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOfferAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
