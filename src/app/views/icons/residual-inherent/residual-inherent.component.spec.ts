import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidualInherentComponent } from './residual-inherent.component';

describe('ResidualInherentComponent', () => {
  let component: ResidualInherentComponent;
  let fixture: ComponentFixture<ResidualInherentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidualInherentComponent]
    });
    fixture = TestBed.createComponent(ResidualInherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
