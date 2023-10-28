import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrisktypeComponent } from './editrisktype.component';

describe('EditrisktypeComponent', () => {
  let component: EditrisktypeComponent;
  let fixture: ComponentFixture<EditrisktypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditrisktypeComponent]
    });
    fixture = TestBed.createComponent(EditrisktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
