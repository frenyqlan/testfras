import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooggenComponent } from './googgen.component';

describe('GooggenComponent', () => {
  let component: GooggenComponent;
  let fixture: ComponentFixture<GooggenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooggenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooggenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
