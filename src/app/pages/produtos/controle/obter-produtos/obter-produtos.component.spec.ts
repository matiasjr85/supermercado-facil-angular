import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterProdutosComponent } from './obter-produtos.component';

describe('ObterProdutosComponent', () => {
  let component: ObterProdutosComponent;
  let fixture: ComponentFixture<ObterProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObterProdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObterProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
