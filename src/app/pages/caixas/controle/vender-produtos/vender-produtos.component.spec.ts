import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderProdutosComponent } from './vender-produtos.component';

describe('VenderProdutosComponent', () => {
  let component: VenderProdutosComponent;
  let fixture: ComponentFixture<VenderProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenderProdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenderProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
