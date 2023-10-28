import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidualImpactComponent } from './residual-impact.component';

describe('ResidualImpactComponent', () => {
  let component: ResidualImpactComponent;
  let fixture: ComponentFixture<ResidualImpactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidualImpactComponent]
    });
    fixture = TestBed.createComponent(ResidualImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
