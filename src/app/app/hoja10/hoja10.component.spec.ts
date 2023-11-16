import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoja10Component } from './hoja10.component';

describe('Hoja10Component', () => {
  let component: Hoja10Component;
  let fixture: ComponentFixture<Hoja10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoja10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hoja10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
