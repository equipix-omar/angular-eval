import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhiritedComponent } from './inhirited.component';

describe('InhiritedComponent', () => {
  let component: InhiritedComponent;
  let fixture: ComponentFixture<InhiritedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InhiritedComponent]
    });
    fixture = TestBed.createComponent(InhiritedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
