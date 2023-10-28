import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdiscucComponent } from './newdiscuc.component';

describe('NewdiscucComponent', () => {
  let component: NewdiscucComponent;
  let fixture: ComponentFixture<NewdiscucComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewdiscucComponent]
    });
    fixture = TestBed.createComponent(NewdiscucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
