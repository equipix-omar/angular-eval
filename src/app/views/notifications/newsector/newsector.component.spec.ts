import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsectorComponent } from './newsector.component';

describe('NewsectorComponent', () => {
  let component: NewsectorComponent;
  let fixture: ComponentFixture<NewsectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsectorComponent]
    });
    fixture = TestBed.createComponent(NewsectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
