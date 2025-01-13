import { Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { CriarProdutoComponent } from './controle/criar-produto/criar-produto.component';
import { ObterProdutosComponent } from './controle/obter-produtos/obter-produtos.component';
import { ObterProdutoPorIdComponent } from './controle/obter-produto-por-id/obter-produto-por-id.component';
import { AtualizarProdutoComponent } from './controle/atualizar-produto/atualizar-produto.component';
import { ExcluirCaixaComponent } from '../caixas/controle/excluir-caixa/excluir-caixa.component';
import { ExcluirProdutoComponent } from './controle/excluir-produto/excluir-produto.component';

export const produtoRoutes: Routes = [
  {
    path: 'produtos',
    component: ProdutosComponent,
    children: [      
      { path: 'criar-produto', component: CriarProdutoComponent },
      { path: 'obter-produtos', component: ObterProdutosComponent },
      { path: 'obter-produto-por-id', component: ObterProdutoPorIdComponent },
      { path: 'atualizar-produto', component: AtualizarProdutoComponent },
      { path: 'excluir-produto', component: ExcluirProdutoComponent},
      { path: 'atualizar/:id', component: AtualizarProdutoComponent}      
    ],
  },
];
