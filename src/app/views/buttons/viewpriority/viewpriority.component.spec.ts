import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpriorityComponent } from './viewpriority.component';

describe('ViewpriorityComponent', () => {
  let component: ViewpriorityComponent;
  let fixture: ComponentFixture<ViewpriorityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewpriorityComponent]
    });
    fixture = TestBed.createComponent(ViewpriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
