import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCaixaComponent } from './criar-caixa.component';

describe('CriarCaixaComponent', () => {
  let component: CriarCaixaComponent;
  let fixture: ComponentFixture<CriarCaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarCaixaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
