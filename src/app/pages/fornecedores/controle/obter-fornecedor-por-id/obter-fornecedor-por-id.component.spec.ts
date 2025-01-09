import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterFornecedorPorIdComponent } from './obter-fornecedor-por-id.component';

describe('ObterFornecedorPorIdComponent', () => {
  let component: ObterFornecedorPorIdComponent;
  let fixture: ComponentFixture<ObterFornecedorPorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObterFornecedorPorIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObterFornecedorPorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
