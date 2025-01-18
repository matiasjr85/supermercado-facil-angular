import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { fornecedorRoutes } from './fornecedor-routes';
import { CriarFornecedorComponent } from './controle/criar-fornecedor/criar-fornecedor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forChild(fornecedorRoutes),
    CriarFornecedorComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],  
})
export class FornecedoresModule { }
