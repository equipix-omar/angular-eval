import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResidualImpactComponent } from './edit-residual-impact.component';

describe('EditResidualImpactComponent', () => {
  let component: EditResidualImpactComponent;
  let fixture: ComponentFixture<EditResidualImpactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditResidualImpactComponent]
    });
    fixture = TestBed.createComponent(EditResidualImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
