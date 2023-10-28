import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResidualInherentComponent } from './edit-residual-inherent.component';

describe('EditResidualInherentComponent', () => {
  let component: EditResidualInherentComponent;
  let fixture: ComponentFixture<EditResidualInherentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditResidualInherentComponent]
    });
    fixture = TestBed.createComponent(EditResidualInherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
