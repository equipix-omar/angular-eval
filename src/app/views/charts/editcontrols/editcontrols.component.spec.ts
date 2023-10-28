import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcontrolsComponent } from './editcontrols.component';

describe('EditcontrolsComponent', () => {
  let component: EditcontrolsComponent;
  let fixture: ComponentFixture<EditcontrolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditcontrolsComponent]
    });
    fixture = TestBed.createComponent(EditcontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
