import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarCaixaComponent } from './atualizar-caixa.component';

describe('AtualizarCaixaComponent', () => {
  let component: AtualizarCaixaComponent;
  let fixture: ComponentFixture<AtualizarCaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarCaixaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtualizarCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
