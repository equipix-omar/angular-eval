import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisktypeComponent } from './risktype.component';

describe('RisktypeComponent', () => {
  let component: RisktypeComponent;
  let fixture: ComponentFixture<RisktypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RisktypeComponent]
    });
    fixture = TestBed.createComponent(RisktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
