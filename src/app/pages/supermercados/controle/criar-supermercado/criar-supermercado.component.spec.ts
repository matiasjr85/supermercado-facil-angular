import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarSupermercadoComponent } from './criar-supermercado.component';

describe('CriarSupermercadoComponent', () => {
  let component: CriarSupermercadoComponent;
  let fixture: ComponentFixture<CriarSupermercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarSupermercadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarSupermercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
