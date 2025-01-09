import { Component } from '@angular/core';
import { VoltarButtonComponent } from '../../voltar-button/voltar-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [VoltarButtonComponent, RouterModule],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css',
})
export class EstoqueComponent {}
