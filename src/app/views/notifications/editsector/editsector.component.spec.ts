import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsectorComponent } from './editsector.component';

describe('EditsectorComponent', () => {
  let component: EditsectorComponent;
  let fixture: ComponentFixture<EditsectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditsectorComponent]
    });
    fixture = TestBed.createComponent(EditsectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
