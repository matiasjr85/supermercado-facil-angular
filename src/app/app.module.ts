import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { produtoRoutes } from './pages/produtos/produto-routes'; // Importe suas rotas de produtos
import { fornecedorRoutes } from './pages/fornecedores/fornecedor-routes';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(produtoRoutes),
    RouterModule.forRoot(fornecedorRoutes),  // Adicione suas rotas aqui
    HttpClientModule,
    // Outros módulos que você esteja utilizando
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
