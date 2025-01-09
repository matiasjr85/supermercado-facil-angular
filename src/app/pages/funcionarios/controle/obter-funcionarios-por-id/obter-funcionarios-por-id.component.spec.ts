import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterFuncionariosPorIdComponent } from './obter-funcionarios-por-id.component';

describe('ObterFuncionariosPorIdComponent', () => {
  let component: ObterFuncionariosPorIdComponent;
  let fixture: ComponentFixture<ObterFuncionariosPorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObterFuncionariosPorIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObterFuncionariosPorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
