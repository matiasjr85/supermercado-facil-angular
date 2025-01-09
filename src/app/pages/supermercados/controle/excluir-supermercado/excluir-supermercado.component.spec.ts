import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirSupermercadoComponent } from './excluir-supermercado.component';

describe('ExcluirSupermercadoComponent', () => {
  let component: ExcluirSupermercadoComponent;
  let fixture: ComponentFixture<ExcluirSupermercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirSupermercadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirSupermercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
