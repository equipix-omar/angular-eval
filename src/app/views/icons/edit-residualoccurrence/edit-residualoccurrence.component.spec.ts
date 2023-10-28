import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResidualoccurrenceComponent } from './edit-residualoccurrence.component';

describe('EditResidualoccurrenceComponent', () => {
  let component: EditResidualoccurrenceComponent;
  let fixture: ComponentFixture<EditResidualoccurrenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditResidualoccurrenceComponent]
    });
    fixture = TestBed.createComponent(EditResidualoccurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
