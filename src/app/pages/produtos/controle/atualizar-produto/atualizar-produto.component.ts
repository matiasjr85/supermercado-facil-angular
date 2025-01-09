import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../../../../services/produto.service';
import { VoltarButtonComponent } from '../../../../voltar-button/voltar-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atualizar-produto',
  standalone: true,
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css'],
  imports: [VoltarButtonComponent, ReactiveFormsModule, CommonModule]
})
export class AtualizarProdutoComponent {
  produtoForm: FormGroup;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(private fb: FormBuilder, private produtoService: ProdutoService) {
    this.produtoForm = this.fb.group({
      id: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      valorDeCompra: ['', [Validators.required, Validators.min(0)]],
      valorDeVenda: ['', [Validators.required, Validators.min(0)]],
      fornecedorId: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.mensagemSucesso = null;
    this.mensagemErro = null;

    if (this.produtoForm.valid) {
      const { id, ...produtoData } = this.produtoForm.value;

      this.produtoService.atualizarProduto(id, produtoData).subscribe({
        next: () => {
          this.mensagemSucesso = 'Produto atualizado com sucesso!';
          this.produtoForm.reset(); // Reseta o formulário
        },
        error: (err) => {
          this.mensagemErro = 'Erro ao atualizar o produto. ' + (err.error?.message || '');
        },
      });
    } else {
      this.mensagemErro = 'Por favor, preencha todos os campos corretamente.';
    }
  }
}
