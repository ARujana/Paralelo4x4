import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoOrdenesComponent } from './manejo-ordenes.component';

describe('ManejoOrdenesComponent', () => {
  let component: ManejoOrdenesComponent;
  let fixture: ComponentFixture<ManejoOrdenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoOrdenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
