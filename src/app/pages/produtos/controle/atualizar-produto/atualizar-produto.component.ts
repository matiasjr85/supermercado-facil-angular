import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../../../../services/produto.service';
import { VoltarButtonComponent } from '../../../../voltar-button/voltar-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atualizar-produto',
  standalone: true,
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css'],
  imports: [VoltarButtonComponent, CommonModule, ReactiveFormsModule],
})
export class AtualizarProdutoComponent implements OnInit {
  produtoForm: FormGroup;
  produtoId: string = '';
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.produtoForm = this.fb.group({
      nome: ['', [Validators.required]],
      valorDeCompra: ['', [Validators.required, Validators.min(0)]],
      valorDeVenda: ['', [Validators.required, Validators.min(0)]],
      fornecedorId: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.produtoId = this.route.snapshot.paramMap.get('id') || '';
    if (this.produtoId) {
      this.carregarProduto(this.produtoId);
    }
  }

  carregarProduto(id: string): void {
    this.produtoService.obterProdutoPorId(id).subscribe(
      (produto) => {
        this.produtoForm.setValue({
          nome: produto.nome,
          valorDeCompra: produto.valorDeCompra,
          valorDeVenda: produto.valorDeVenda,
          fornecedorId: produto.fornecedor?._id,
        });
      },
      (err) => {
        console.error('Erro ao carregar o produto:', err);
      }
    );
  }

  onSubmit(): void {
    if (this.produtoForm.valid) {
      const { fornecedorId, ...produtoData } = this.produtoForm.value;
      this.produtoService.atualizarProduto(this.produtoId, produtoData).subscribe(
        () => {
          this.mensagemSucesso = 'Produto atualizado com sucesso!';
          this.router.navigate(['/produtos/obter-produtos']);
        },
        (err) => {
          this.mensagemErro = 'Erro ao atualizar o produto: ' + err.message;
        }
      );
    } else {
      this.mensagemErro = 'Por favor, preencha todos os campos corretamente.';
    }
  }
}
