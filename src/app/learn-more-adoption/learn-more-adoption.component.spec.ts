import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreAdoptionComponent } from './learn-more-adoption.component';

describe('LearnMoreAdoptionComponent', () => {
  let component: LearnMoreAdoptionComponent;
  let fixture: ComponentFixture<LearnMoreAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnMoreAdoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
