import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteOtroComponent } from './reporte-otro.component';

describe('ReporteOtroComponent', () => {
  let component: ReporteOtroComponent;
  let fixture: ComponentFixture<ReporteOtroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteOtroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteOtroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
