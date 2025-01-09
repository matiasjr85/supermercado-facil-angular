import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SupermercadosComponent } from './pages/supermercados/supermercados.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { CaixasComponent } from './pages/caixas/caixas.component';
import { produtoRoutes } from './pages/produtos/produto-routes';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'supermercados', component: SupermercadosComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'fornecedores', component: FornecedoresComponent },
  { path: 'funcionarios', component: FuncionariosComponent },
  { path: 'caixas', component: CaixasComponent },
  ...produtoRoutes, // Adiciona as rotas de produtos
];
