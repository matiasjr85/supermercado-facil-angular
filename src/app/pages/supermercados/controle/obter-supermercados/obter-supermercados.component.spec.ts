import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterSupermercadosComponent } from './obter-supermercados.component';

describe('ObterSupermercadosComponent', () => {
  let component: ObterSupermercadosComponent;
  let fixture: ComponentFixture<ObterSupermercadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObterSupermercadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObterSupermercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
