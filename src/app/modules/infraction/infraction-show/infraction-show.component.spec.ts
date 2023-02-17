import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfractionShowComponent } from './infraction-show.component';

describe('InfractionShowComponent', () => {
  let component: InfractionShowComponent;
  let fixture: ComponentFixture<InfractionShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfractionShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfractionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
