import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CriarProdutoComponent } from './controle/criar-produto/criar-produto.component';
import { ObterProdutosComponent } from './controle/obter-produtos/obter-produtos.component';
import { ObterProdutoPorIdComponent } from './controle/obter-produto-por-id/obter-produto-por-id.component';
import { AtualizarProdutoComponent } from './controle/atualizar-produto/atualizar-produto.component';
import { ExcluirProdutoComponent } from './controle/excluir-produto/excluir-produto.component';
import { produtoRoutes } from './produto-routes';
import { VoltarButtonComponent } from '../../voltar-button/voltar-button.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ 
    ObterProdutoPorIdComponent,  
    ExcluirProdutoComponent,    
  ],
  imports: [
    CriarProdutoComponent,
    ObterProdutosComponent,
    AtualizarProdutoComponent,
    CommonModule, // Necessário para pipes como currency
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(produtoRoutes),
    HttpClientModule,
    VoltarButtonComponent
  ],
})
export class ProdutoModule {}
