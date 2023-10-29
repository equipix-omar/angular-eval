import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmangsComponent } from './newmangs.component';

describe('NewmangsComponent', () => {
  let component: NewmangsComponent;
  let fixture: ComponentFixture<NewmangsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewmangsComponent]
    });
    fixture = TestBed.createComponent(NewmangsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
