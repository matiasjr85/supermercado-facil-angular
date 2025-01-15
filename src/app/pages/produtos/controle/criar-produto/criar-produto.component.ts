import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';  // Para criação do formulário
import { ProdutoService } from '../../../../services/produto.service'; // Importando o serviço que criamos
import { VoltarButtonComponent } from '../../../../voltar-button/voltar-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-produto',
  standalone: true,
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css'],
  imports: [ReactiveFormsModule],
})
export class CriarProdutoComponent {
  produtoForm: FormGroup;  
  constructor(
    private fb: FormBuilder,  
    private produtoService: ProdutoService,
    private router: Router
  ) {
    // Inicializando o formulário com os campos necessários
    this.produtoForm = this.fb.group({
      nome: ['', Validators.required],  // Nome é obrigatório
      valorDeCompra: ['', Validators.required],  // Valor de Compra é obrigatório
      valorDeVenda: ['', Validators.required],  // Valor de Venda é obrigatório
      fornecedorId: ['', Validators.required],  // Fornecedor é obrigatório
    });
  }

  voltar(): void {
    this.router.navigate(['/produtos']); // Redireciona para a página de produtos
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
