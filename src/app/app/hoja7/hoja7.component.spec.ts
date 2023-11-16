import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoja7Component } from './hoja7.component';

describe('Hoja7Component', () => {
  let component: Hoja7Component;
  let fixture: ComponentFixture<Hoja7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoja7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hoja7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
