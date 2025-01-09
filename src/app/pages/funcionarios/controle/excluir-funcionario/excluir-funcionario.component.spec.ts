import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirFuncionarioComponent } from './excluir-funcionario.component';

describe('ExcluirFuncionarioComponent', () => {
  let component: ExcluirFuncionarioComponent;
  let fixture: ComponentFixture<ExcluirFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirFuncionarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcluirFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
