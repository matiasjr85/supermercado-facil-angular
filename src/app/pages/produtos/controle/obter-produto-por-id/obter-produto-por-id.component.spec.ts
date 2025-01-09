import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterProdutoPorIdComponent } from './obter-produto-por-id.component';

describe('ObterProdutoPorIdComponent', () => {
  let component: ObterProdutoPorIdComponent;
  let fixture: ComponentFixture<ObterProdutoPorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObterProdutoPorIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObterProdutoPorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
