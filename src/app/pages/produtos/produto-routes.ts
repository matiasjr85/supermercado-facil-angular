import { Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { CriarProdutoComponent } from './controle/criar-produto/criar-produto.component';
import { ObterProdutosComponent } from './controle/obter-produtos/obter-produtos.component';
import { ObterProdutoPorIdComponent } from './controle/obter-produto-por-id/obter-produto-por-id.component';
import { AtualizarProdutoComponent } from './controle/atualizar-produto/atualizar-produto.component';

export const produtoRoutes: Routes = [
  {
    path: 'produtos',
    component: ProdutosComponent,
    children: [      
      { path: 'criar-produto', component: CriarProdutoComponent },
      { path: 'obter-produtos', component: ObterProdutosComponent },
      { path: 'obter-produto-por-id', component: ObterProdutoPorIdComponent },
      { path: 'atualizar-produto', component: AtualizarProdutoComponent },      
    ],
  },
];
