import { Component } from '@angular/core';
import { VoltarButtonComponent } from '../../voltar-button/voltar-button.component'; // Importação do VoltarButtonComponent
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [RouterModule], // Incluindo o VoltarButtonComponent
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {

  constructor(private router: Router) {

  }

  voltarParaHome(): void {
    this.router.navigate(['/']); // Redireciona para a página inicial
  }

}
