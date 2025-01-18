import { Component } from '@angular/core';
import { VoltarButtonComponent } from '../../voltar-button/voltar-button.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-fornecedores',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './fornecedores.component.html',
  styleUrl: './fornecedores.component.css'
})
export class FornecedoresComponent {

  constructor(private router: Router) {}

  voltarParaHome(): void {
    this.router.navigate(['/']); // Redireciona para a página inicial
  }


}
