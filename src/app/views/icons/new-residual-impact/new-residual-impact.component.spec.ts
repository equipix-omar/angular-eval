import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResidualImpactComponent } from './new-residual-impact.component';

describe('NewResidualImpactComponent', () => {
  let component: NewResidualImpactComponent;
  let fixture: ComponentFixture<NewResidualImpactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewResidualImpactComponent]
    });
    fixture = TestBed.createComponent(NewResidualImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
