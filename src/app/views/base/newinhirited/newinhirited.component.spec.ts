import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinhiritedComponent } from './newinhirited.component';

describe('NewinhiritedComponent', () => {
  let component: NewinhiritedComponent;
  let fixture: ComponentFixture<NewinhiritedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewinhiritedComponent]
    });
    fixture = TestBed.createComponent(NewinhiritedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
