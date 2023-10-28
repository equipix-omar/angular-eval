import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newdiscuc2Component } from './newdiscuc2.component';

describe('Newdiscuc2Component', () => {
  let component: Newdiscuc2Component;
  let fixture: ComponentFixture<Newdiscuc2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Newdiscuc2Component]
    });
    fixture = TestBed.createComponent(Newdiscuc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
