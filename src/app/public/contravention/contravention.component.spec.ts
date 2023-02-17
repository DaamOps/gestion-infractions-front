import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraventionComponent } from './contravention.component';

describe('ContraventionComponent', () => {
  let component: ContraventionComponent;
  let fixture: ComponentFixture<ContraventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContraventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
