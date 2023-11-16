import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoja9Component } from './hoja9.component';

describe('Hoja9Component', () => {
  let component: Hoja9Component;
  let fixture: ComponentFixture<Hoja9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoja9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hoja9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
