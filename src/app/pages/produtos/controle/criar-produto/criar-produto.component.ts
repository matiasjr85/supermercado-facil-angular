import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';  // Para criação do formulário
import { ProdutoService } from '../../../../services/produto.service'; // Importando o serviço que criamos
import { VoltarButtonComponent } from '../../../../voltar-button/voltar-button.component';
import { Router } from '@angular/router';
import { FornecedorService } from '../../../../services/fornecedor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-criar-produto',
  standalone: true,
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class CriarProdutoComponent {
  produtoForm: FormGroup;
  fornecedores: any[] = [];
  successMessage: string = ''
  
  constructor(
    private fb: FormBuilder,  
    private produtoService: ProdutoService,
    private router: Router,
    private fornecedorService: FornecedorService
  ) {
    // Inicializando o formulário com os campos necessários
    this.produtoForm = this.fb.group({
      nome: ['', Validators.required],  // Nome é obrigatório
      valorDeCompra: ['', Validators.required],  // Valor de Compra é obrigatório
      valorDeVenda: ['', Validators.required],  // Valor de Venda é obrigatório
      fornecedor: ['', Validators.required],  // Fornecedor é obrigatório
    });
  }

  voltar(): void {
    this.router.navigate(['/produtos']); // Redireciona para a página de produtos
  }

  ngOnInit(): void {
    this.carregarFornecedores();
  }

  carregarFornecedores(): void {
    this.fornecedorService.obterFornecedores().subscribe(
      (dados) => {
        this.fornecedores = dados;
      },
      (erro) => {
        console.error('Erro ao carregar fornecedores', erro);
      }
    );
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
          this.successMessage = 'Produto cadastrado com sucesso!';

          // Limpando o formulário após a criação
          this.produtoForm.reset();

          // Opcional: Você pode adicionar um tempo para esconder a mensagem após alguns segundos.
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
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
