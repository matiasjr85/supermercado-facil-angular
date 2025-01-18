import { Routes } from '@angular/router';
import { CriarFornecedorComponent } from './controle/criar-fornecedor/criar-fornecedor.component';
import { FornecedoresComponent } from './fornecedores.component';

export const fornecedorRoutes: Routes = [
  {
    path: 'fornecedores',
    component: FornecedoresComponent,
    children: [
        { path: 'criar-fornecedor', component: CriarFornecedorComponent }
    ]
  },
];
