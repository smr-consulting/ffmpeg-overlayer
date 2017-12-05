import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetVidElementsComponent } from './set-vid-elements.component';

describe('SetVidElementsComponent', () => {
  let component: SetVidElementsComponent;
  let fixture: ComponentFixture<SetVidElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetVidElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetVidElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
