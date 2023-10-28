import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImpactComponent } from './edit-impact.component';

describe('EditImpactComponent', () => {
  let component: EditImpactComponent;
  let fixture: ComponentFixture<EditImpactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditImpactComponent]
    });
    fixture = TestBed.createComponent(EditImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
