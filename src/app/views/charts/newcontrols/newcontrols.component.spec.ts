import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcontrolsComponent } from './newcontrols.component';

describe('NewcontrolsComponent', () => {
  let component: NewcontrolsComponent;
  let fixture: ComponentFixture<NewcontrolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcontrolsComponent]
    });
    fixture = TestBed.createComponent(NewcontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
