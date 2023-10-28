import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurrenceComponent } from './occurrence.component';

describe('OccurrenceComponent', () => {
  let component: OccurrenceComponent;
  let fixture: ComponentFixture<OccurrenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OccurrenceComponent]
    });
    fixture = TestBed.createComponent(OccurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
