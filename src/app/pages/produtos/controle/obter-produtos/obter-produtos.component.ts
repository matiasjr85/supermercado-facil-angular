import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../../../../services/produto.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obter-produtos',
  standalone: true,
  templateUrl: './obter-produtos.component.html',
  styleUrls: ['./obter-produtos.component.css'],
  imports: [CommonModule]
})
export class ObterProdutosComponent implements OnInit {
  produtos: any[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.obterProdutos().subscribe(
      (data) => {
        this.produtos = data;
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
      }
    );
  }

  redirecionarParaAtualizar(produtoId: string): void {
    // Redireciona para a página de atualização, passando o ID do produto na URL
    this.router.navigate(['/produtos/atualizar', produtoId]);
  }

  excluirProduto(produtoId: string): void {
    this.produtoService.excluirProduto(produtoId).subscribe(
      () => {
        this.carregarProdutos();
      },
      (error) => {
        console.error('Erro ao excluir produto:', error);
      }
    );
  }
}
