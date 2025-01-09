import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterCaixaPorIdComponent } from './obter-caixa-por-id.component';

describe('ObterCaixaPorIdComponent', () => {
  let component: ObterCaixaPorIdComponent;
  let fixture: ComponentFixture<ObterCaixaPorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObterCaixaPorIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObterCaixaPorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
