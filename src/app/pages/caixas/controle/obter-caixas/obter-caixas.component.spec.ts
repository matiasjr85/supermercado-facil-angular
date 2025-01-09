import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterCaixasComponent } from './obter-caixas.component';

describe('ObterCaixasComponent', () => {
  let component: ObterCaixasComponent;
  let fixture: ComponentFixture<ObterCaixasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObterCaixasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObterCaixasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
