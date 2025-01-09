import { Component } from '@angular/core';
import { VoltarButtonComponent } from '../../voltar-button/voltar-button.component'; // Importação do VoltarButtonComponent
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [VoltarButtonComponent, RouterModule], // Incluindo o VoltarButtonComponent
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {}
