import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../../../../services/produto.service';
import { FornecedorService } from '../../../../services/fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atualizar-produto',
  standalone: true,
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AtualizarProdutoComponent implements OnInit {
  produtoForm: FormGroup;
  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;
  fornecedores: { _id: string; nomeEmpresa: string }[] = []; // Ajustado para refletir a estrutura correta

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private fornecedorService: FornecedorService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.produtoForm = this.fb.group({
      nome: ['', [Validators.required]],
      valorDeCompra: ['', [Validators.required, Validators.min(0)]],
      valorDeVenda: ['', [Validators.required, Validators.min(0)]],
      fornecedorId: ['', [Validators.required]], // Preenchido com o ID do fornecedor selecionado
    });
  }

  ngOnInit(): void {
    this.carregarFornecedores(); // Carrega os fornecedores ao inicializar o componente
    this.carregarDadosProduto(); // Carrega os dados do produto a ser atualizado
  }

  carregarFornecedores(): void {
    this.fornecedorService.obterFornecedores().subscribe(
      (fornecedores) => {
        console.log('Fornecedores carregados:', fornecedores);
        this.fornecedores = fornecedores.map((fornecedor) => ({
          _id: fornecedor._id,
          nomeEmpresa: fornecedor.nomeEmpresa, // Ajuste para garantir que usamos o campo correto
        }));
      },
      (err) => {
        console.error('Erro ao carregar fornecedores:', err);
        this.mensagemErro = 'Erro ao carregar a lista de fornecedores.';
      }
    );
  }

  carregarDadosProduto(): void {
    const produtoId = this.route.snapshot.paramMap.get('id');
    if (produtoId) {
      this.produtoService.obterProdutoPorId(produtoId).subscribe(
        (produto) => {
          this.produtoForm.patchValue({
            nome: produto.nome,
            valorDeCompra: produto.valorDeCompra,
            valorDeVenda: produto.valorDeVenda,
            fornecedorId: produto.fornecedor._id, // Ajustado para usar o ID do fornecedor
          });
        },
        (err) => {
          console.error('Erro ao carregar produto:', err);
          this.mensagemErro = 'Erro ao carregar dados do produto.';
        }
      );
    }
  }

  onSubmit(): void {
    this.mensagemSucesso = null;
    this.mensagemErro = null;

    if (this.produtoForm.valid) {
      const produtoId = this.route.snapshot.paramMap.get('id');
      const produtoAtualizado = this.produtoForm.value;

      console.log('Dados enviados para atualização:', produtoAtualizado);

      if (produtoId) {
        this.produtoService.atualizarProduto(produtoId, produtoAtualizado).subscribe(
          () => {
            this.mensagemSucesso = 'Produto atualizado com sucesso!';
            setTimeout(() => this.router.navigate(['/produtos/obter-produtos']), 2000); // Redireciona após 2 segundos
          },
          (err) => {
            console.error('Erro ao atualizar produto:', err);
            this.mensagemErro = 'Erro ao atualizar o produto. ' + (err.error?.message || '');
          }
        );
      }
    } else {
      this.mensagemErro = 'Por favor, preencha todos os campos corretamente.';
    }
  }
}
