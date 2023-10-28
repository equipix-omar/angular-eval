import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newnote2Component } from './newnote2.component';

describe('Newnote2Component', () => {
  let component: Newnote2Component;
  let fixture: ComponentFixture<Newnote2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Newnote2Component]
    });
    fixture = TestBed.createComponent(Newnote2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
