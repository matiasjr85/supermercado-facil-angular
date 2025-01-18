import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SupermercadosComponent } from './pages/supermercados/supermercados.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { CaixasComponent } from './pages/caixas/caixas.component';
import { produtoRoutes } from './pages/produtos/produto-routes';
import { fornecedorRoutes } from './pages/fornecedores/fornecedor-routes';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'supermercados', component: SupermercadosComponent },
  { path: 'estoque', component: EstoqueComponent },  
  { path: 'funcionarios', component: FuncionariosComponent },
  { path: 'caixas', component: CaixasComponent },
  ...produtoRoutes, ...fornecedorRoutes
];
