import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../../services/produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obter-produtos',
  templateUrl: './obter-produtos.component.html',
  styleUrls: ['./obter-produtos.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ObterProdutosComponent implements OnInit {
  produtos: any[] = []; // Lista de produtos que será exibida
  errorMessage: string | null = null; // Mensagem de erro, se houver

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  // Método para carregar produtos
  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe({
      next: (response) => {
        this.produtos = response; // Armazena os produtos recebidos
        console.log('Produtos recebidos:', response);
      },
      error: (error) => {
        console.error('Erro ao obter produtos:', error);
        this.errorMessage = 'Erro ao carregar produtos. Tente novamente.';
      },
    });
  }
}
