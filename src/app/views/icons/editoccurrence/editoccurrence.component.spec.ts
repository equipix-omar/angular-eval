import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoccurrenceComponent } from './editoccurrence.component';

describe('EditoccurrenceComponent', () => {
  let component: EditoccurrenceComponent;
  let fixture: ComponentFixture<EditoccurrenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditoccurrenceComponent]
    });
    fixture = TestBed.createComponent(EditoccurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
