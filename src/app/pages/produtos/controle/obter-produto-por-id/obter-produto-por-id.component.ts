import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../../../../services/produto.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obter-produto-por-id',
  standalone: true,
  templateUrl: './obter-produto-por-id.component.html',
  styleUrls: ['./obter-produto-por-id.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ObterProdutoPorIdComponent {
  produtoForm: FormGroup;
  produto: any = null;
  mensagemErro: string | null = null;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router
  ) {
    this.produtoForm = this.fb.group({
      id: [
        '',
        [
          Validators.required,
          Validators.minLength(24), // Garante que o ID tenha exatamente 24 caracteres
          Validators.maxLength(24),
        ],
      ],
    });
  }

  voltar(): void {
    this.router.navigate(['/produtos']); // Redireciona para a página de produtos
  }

  buscarProduto() {
    this.mensagemErro = null;
    this.produto = null;

    if (this.produtoForm.valid) {
      const id = this.produtoForm.get('id')?.value;

      this.produtoService.obterProdutoPorId(id).subscribe({
        next: (produto) => {
          this.produto = produto;
          this.mensagemErro = null;
        },
        error: (err) => {
          if (err.status === 404) {
            this.mensagemErro = 'Produto não encontrado. Verifique o ID informado.';
          } else {
            this.mensagemErro = 'Ocorreu um erro ao buscar o produto. Tente novamente.';
          }
        },
      });
    } else {
      this.mensagemErro = 'Por favor, insira um ID válido com 24 caracteres.';
    }
  }
}
