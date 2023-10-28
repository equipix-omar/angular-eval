import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstatusComponent } from './newstatus.component';

describe('NewstatusComponent', () => {
  let component: NewstatusComponent;
  let fixture: ComponentFixture<NewstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewstatusComponent]
    });
    fixture = TestBed.createComponent(NewstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
