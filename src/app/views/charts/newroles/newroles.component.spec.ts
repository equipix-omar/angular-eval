import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrolesComponent } from './newroles.component';

describe('NewrolesComponent', () => {
  let component: NewrolesComponent;
  let fixture: ComponentFixture<NewrolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewrolesComponent]
    });
    fixture = TestBed.createComponent(NewrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
