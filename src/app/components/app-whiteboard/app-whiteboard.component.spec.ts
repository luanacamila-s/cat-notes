import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWhiteboardComponent } from './app-whiteboard.component';

describe('AppWhiteboardComponent', () => {
  let component: AppWhiteboardComponent;
  let fixture: ComponentFixture<AppWhiteboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppWhiteboardComponent]
    });
    fixture = TestBed.createComponent(AppWhiteboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
