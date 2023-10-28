import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewImpactComponent } from './new-impact.component';

describe('NewImpactComponent', () => {
  let component: NewImpactComponent;
  let fixture: ComponentFixture<NewImpactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewImpactComponent]
    });
    fixture = TestBed.createComponent(NewImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
