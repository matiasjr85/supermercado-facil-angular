import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-voltar-button',
  standalone: true,  // Permite o uso como componente independente
  templateUrl: './voltar-button.component.html',
  styleUrls: ['./voltar-button.component.css']
})
export class VoltarButtonComponent {
  constructor(private location: Location) {}

  voltar() {
    this.location.back(); // Volta para a página anterior no histórico do navegador
  }
}
