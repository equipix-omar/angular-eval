import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstatusComponent } from './viewstatus.component';

describe('ViewstatusComponent', () => {
  let component: ViewstatusComponent;
  let fixture: ComponentFixture<ViewstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewstatusComponent]
    });
    fixture = TestBed.createComponent(ViewstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
