import { Component } from '@angular/core';
import { VoltarButtonComponent } from '../../voltar-button/voltar-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-caixas',
  standalone: true,
  imports: [VoltarButtonComponent, RouterModule],
  templateUrl: './caixas.component.html',
  styleUrls: ['./caixas.component.css'],
})
export class CaixasComponent {

  
}
