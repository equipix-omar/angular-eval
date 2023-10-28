import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewoccurrenceComponent } from './newoccurrence.component';

describe('NewoccurrenceComponent', () => {
  let component: NewoccurrenceComponent;
  let fixture: ComponentFixture<NewoccurrenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewoccurrenceComponent]
    });
    fixture = TestBed.createComponent(NewoccurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
