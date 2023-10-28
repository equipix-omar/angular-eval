import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrisktypeComponent } from './newrisktype.component';

describe('NewrisktypeComponent', () => {
  let component: NewrisktypeComponent;
  let fixture: ComponentFixture<NewrisktypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewrisktypeComponent]
    });
    fixture = TestBed.createComponent(NewrisktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
