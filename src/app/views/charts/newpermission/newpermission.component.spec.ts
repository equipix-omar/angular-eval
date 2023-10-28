import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpermissionComponent } from './newpermission.component';

describe('NewpermissionComponent', () => {
  let component: NewpermissionComponent;
  let fixture: ComponentFixture<NewpermissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewpermissionComponent]
    });
    fixture = TestBed.createComponent(NewpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
