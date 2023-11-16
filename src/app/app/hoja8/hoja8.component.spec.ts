import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoja8Component } from './hoja8.component';

describe('Hoja8Component', () => {
  let component: Hoja8Component;
  let fixture: ComponentFixture<Hoja8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoja8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hoja8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
