import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInherentComponent } from './edit-inherent.component';

describe('EditInherentComponent', () => {
  let component: EditInherentComponent;
  let fixture: ComponentFixture<EditInherentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditInherentComponent]
    });
    fixture = TestBed.createComponent(EditInherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
