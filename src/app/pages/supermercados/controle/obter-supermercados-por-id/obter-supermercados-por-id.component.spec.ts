import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterSupermercadosPorIdComponent } from './obter-supermercados-por-id.component';

describe('ObterSupermercadosPorIdComponent', () => {
  let component: ObterSupermercadosPorIdComponent;
  let fixture: ComponentFixture<ObterSupermercadosPorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObterSupermercadosPorIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObterSupermercadosPorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
