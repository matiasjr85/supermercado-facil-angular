import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';  // Para criação do formulário
import { ProdutoService } from '../../../../services/produto.service'; // Importando o serviço que criamos
import { VoltarButtonComponent } from '../../../../voltar-button/voltar-button.component';

@Component({
  selector: 'app-criar-produto',
  standalone: true,
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css'],
  imports: [VoltarButtonComponent, ReactiveFormsModule],
})
export class CriarProdutoComponent {
  produtoForm: FormGroup;  // O formulário para criar um produto

  constructor(
    private fb: FormBuilder,  // Para criar o formulário
    private produtoService: ProdutoService  // Injetando o serviço que criamos
  ) {
    // Inicializando o formulário com os campos necessários
    this.produtoForm = this.fb.group({
      nome: ['', Validators.required],  // Nome é obrigatório
      valorDeCompra: ['', Validators.required],  // Valor de Compra é obrigatório
      valorDeVenda: ['', Validators.required],  // Valor de Venda é obrigatório
      fornecedorId: ['', Validators.required],  // Fornecedor é obrigatório
    });
  }

  // Função que será chamada ao submeter o formulário
  onSubmit() {
    if (this.produtoForm.valid) {
      console.log('Dados do formulário:', this.produtoForm.value);
      // Se o formulário for válido, chamamos o serviço para criar o produto
      this.produtoService.createProduto(this.produtoForm.value).subscribe({
        next: (response) => {
          console.log('Produto criado com sucesso:', response);
          // Você pode mostrar uma mensagem de sucesso ou redirecionar o usuário
        },
        error: (error) => {
          console.error('Erro ao criar produto:', error);
          // Mostrar mensagem de erro para o usuário
        },
      });
    } else {
      // Caso o formulário não seja válido, você pode exibir uma mensagem
      console.log('Formulário inválido');
    }
  }
}
