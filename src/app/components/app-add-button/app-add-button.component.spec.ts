import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddButtonComponent } from './AppAddButtonComponent';

describe('AppAddButtonComponent', () => {
  let component: AppAddButtonComponent;
  let fixture: ComponentFixture<AppAddButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAddButtonComponent]
    });
    fixture = TestBed.createComponent(AppAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
