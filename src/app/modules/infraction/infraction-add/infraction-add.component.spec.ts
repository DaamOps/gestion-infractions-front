import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfractionAddComponent } from './infraction-add.component';

describe('InfractionAddComponent', () => {
  let component: InfractionAddComponent;
  let fixture: ComponentFixture<InfractionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfractionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfractionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
