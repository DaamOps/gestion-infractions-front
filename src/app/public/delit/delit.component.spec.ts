import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelitComponent } from './delit.component';

describe('DelitComponent', () => {
  let component: DelitComponent;
  let fixture: ComponentFixture<DelitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
