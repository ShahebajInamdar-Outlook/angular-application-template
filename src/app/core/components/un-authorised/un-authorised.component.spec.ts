import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAuthorisedComponent } from './un-authorised.component';

describe('UnAuthorisedComponent', () => {
  let component: UnAuthorisedComponent;
  let fixture: ComponentFixture<UnAuthorisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnAuthorisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnAuthorisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
