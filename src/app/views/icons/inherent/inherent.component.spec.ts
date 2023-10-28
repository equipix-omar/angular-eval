import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InherentComponent } from './inherent.component';

describe('InherentComponent', () => {
  let component: InherentComponent;
  let fixture: ComponentFixture<InherentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InherentComponent]
    });
    fixture = TestBed.createComponent(InherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
