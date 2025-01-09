import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarSupermercadoComponent } from './atualizar-supermercado.component';

describe('AtualizarSupermercadoComponent', () => {
  let component: AtualizarSupermercadoComponent;
  let fixture: ComponentFixture<AtualizarSupermercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarSupermercadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtualizarSupermercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
