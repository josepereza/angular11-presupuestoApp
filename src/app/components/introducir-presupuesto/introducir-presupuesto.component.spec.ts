import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducirPresupuestoComponent } from './introducir-presupuesto.component';

describe('IntroducirPresupuestoComponent', () => {
  let component: IntroducirPresupuestoComponent;
  let fixture: ComponentFixture<IntroducirPresupuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroducirPresupuestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducirPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
