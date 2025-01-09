import { Component } from '@angular/core';
import { VoltarButtonComponent } from '../../voltar-button/voltar-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [VoltarButtonComponent, RouterModule],
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.css'
})
export class FuncionariosComponent {

}
