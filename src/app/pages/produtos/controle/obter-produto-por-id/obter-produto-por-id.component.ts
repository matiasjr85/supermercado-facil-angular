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
  imports: [CommonModule, ReactiveFormsModule]
})
export class ObterProdutoPorIdComponent {
  produtoForm: FormGroup;
  produto: any = null;
  mensagemErro: string | null = null;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router) {
    this.produtoForm = this.fb.group({
      id: ['', [Validators.required]],
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
        },
        error: (err) => {
          this.mensagemErro = 'Produto não encontrado. Verifique o ID informado.';
        },
      });
    } else {
      this.mensagemErro = 'Por favor, insira um ID válido.';
    }
  }
}
