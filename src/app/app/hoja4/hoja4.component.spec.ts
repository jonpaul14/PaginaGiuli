import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoja4Component } from './hoja4.component';

describe('Hoja4Component', () => {
  let component: Hoja4Component;
  let fixture: ComponentFixture<Hoja4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoja4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hoja4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
