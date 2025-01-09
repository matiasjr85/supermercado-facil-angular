import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterFuncionariosComponent } from './obter-funcionarios.component';

describe('ObterFuncionariosComponent', () => {
  let component: ObterFuncionariosComponent;
  let fixture: ComponentFixture<ObterFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObterFuncionariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObterFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
