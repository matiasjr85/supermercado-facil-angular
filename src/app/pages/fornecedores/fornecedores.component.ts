import { Component } from '@angular/core';
import { VoltarButtonComponent } from '../../voltar-button/voltar-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fornecedores',
  standalone: true,
  imports: [VoltarButtonComponent, RouterModule],
  templateUrl: './fornecedores.component.html',
  styleUrl: './fornecedores.component.css'
})
export class FornecedoresComponent {

}
