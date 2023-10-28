import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstatusComponent } from './editstatus.component';

describe('EditstatusComponent', () => {
  let component: EditstatusComponent;
  let fixture: ComponentFixture<EditstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditstatusComponent]
    });
    fixture = TestBed.createComponent(EditstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
