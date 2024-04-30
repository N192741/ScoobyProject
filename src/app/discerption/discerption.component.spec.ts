import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscerptionComponent } from './discerption.component';

describe('DiscerptionComponent', () => {
  let component: DiscerptionComponent;
  let fixture: ComponentFixture<DiscerptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscerptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscerptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
