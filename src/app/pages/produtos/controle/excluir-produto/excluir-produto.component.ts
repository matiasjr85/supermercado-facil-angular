import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../../../../services/produto.service';
import { CommonModule } from '@angular/common';
import { VoltarButtonComponent } from '../../../../voltar-button/voltar-button.component';

@Component({
  selector: 'app-excluir-produto',
  standalone: true,
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.css'],
  imports: [CommonModule, VoltarButtonComponent, ReactiveFormsModule]
})
export class ExcluirProdutoComponent {
  excluirForm: FormGroup;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(private fb: FormBuilder, private produtoService: ProdutoService) {
    this.excluirForm = this.fb.group({
      id: ['', [Validators.required]],
    });
  }

  excluirProduto() {
    this.mensagemSucesso = null;
    this.mensagemErro = null;

    if (this.excluirForm.valid) {
      const id = this.excluirForm.get('id')?.value;

      this.produtoService.excluirProduto(id).subscribe({
        next: () => {
          this.mensagemSucesso = 'Produto excluído com sucesso!';
          this.excluirForm.reset();
        },
        error: () => {
          this.mensagemErro = 'Erro ao excluir o produto. Verifique se o ID informado é válido.';
        },
      });
    } else {
      this.mensagemErro = 'Por favor, insira um ID válido.';
    }
  }
}
