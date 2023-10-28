import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInherentComponent } from './new-inherent.component';

describe('NewInherentComponent', () => {
  let component: NewInherentComponent;
  let fixture: ComponentFixture<NewInherentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewInherentComponent]
    });
    fixture = TestBed.createComponent(NewInherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
