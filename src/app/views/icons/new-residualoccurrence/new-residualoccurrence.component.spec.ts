import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResidualoccurrenceComponent } from './new-residualoccurrence.component';

describe('NewResidualoccurrenceComponent', () => {
  let component: NewResidualoccurrenceComponent;
  let fixture: ComponentFixture<NewResidualoccurrenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewResidualoccurrenceComponent]
    });
    fixture = TestBed.createComponent(NewResidualoccurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
