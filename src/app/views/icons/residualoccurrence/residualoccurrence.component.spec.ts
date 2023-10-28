import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidualoccurrenceComponent } from './residualoccurrence.component';

describe('ResidualoccurrenceComponent', () => {
  let component: ResidualoccurrenceComponent;
  let fixture: ComponentFixture<ResidualoccurrenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidualoccurrenceComponent]
    });
    fixture = TestBed.createComponent(ResidualoccurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
