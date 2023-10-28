import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcrmComponent } from './newcrm.component';

describe('NewcrmComponent', () => {
  let component: NewcrmComponent;
  let fixture: ComponentFixture<NewcrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcrmComponent]
    });
    fixture = TestBed.createComponent(NewcrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
