import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscusComponent } from './discus.component';

describe('DiscusComponent', () => {
  let component: DiscusComponent;
  let fixture: ComponentFixture<DiscusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscusComponent]
    });
    fixture = TestBed.createComponent(DiscusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
