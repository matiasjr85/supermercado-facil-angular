import { Component } from '@angular/core';
import { VoltarButtonComponent } from '../../voltar-button/voltar-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-supermercados',
  standalone: true,
  imports: [VoltarButtonComponent, RouterModule],
  templateUrl: './supermercados.component.html',
  styleUrls: ['./supermercados.component.css'],
})
export class SupermercadosComponent {}
