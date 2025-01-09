import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterFornecedoresComponent } from './obter-fornecedores.component';

describe('ObterFornecedoresComponent', () => {
  let component: ObterFornecedoresComponent;
  let fixture: ComponentFixture<ObterFornecedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObterFornecedoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObterFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
