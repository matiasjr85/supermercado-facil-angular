import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirCaixaComponent } from './excluir-caixa.component';

describe('ExcluirCaixaComponent', () => {
  let component: ExcluirCaixaComponent;
  let fixture: ComponentFixture<ExcluirCaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirCaixaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
