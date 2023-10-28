import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpriorityComponent } from './newpriority.component';

describe('NewpriorityComponent', () => {
  let component: NewpriorityComponent;
  let fixture: ComponentFixture<NewpriorityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewpriorityComponent]
    });
    fixture = TestBed.createComponent(NewpriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
