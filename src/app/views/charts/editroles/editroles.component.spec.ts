import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrolesComponent } from './editroles.component';

describe('EditrolesComponent', () => {
  let component: EditrolesComponent;
  let fixture: ComponentFixture<EditrolesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditrolesComponent]
    });
    fixture = TestBed.createComponent(EditrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
