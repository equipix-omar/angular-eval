import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResidualInherentComponent } from './new-residual-inherent.component';

describe('NewResidualInherentComponent', () => {
  let component: NewResidualInherentComponent;
  let fixture: ComponentFixture<NewResidualInherentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewResidualInherentComponent]
    });
    fixture = TestBed.createComponent(NewResidualInherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
