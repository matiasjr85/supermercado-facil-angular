import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private apiUrl = 'http://localhost:3000/produtos'; // Substitua pela URL do seu backend

  constructor(private http: HttpClient) {}

  createProduto(produto: any): Observable<any> {
    return this.http.post(this.apiUrl, produto);
  }

  getProdutos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  obterProdutoPorId(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  atualizarProduto(id: string, produto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, produto);
  }

  excluirProduto(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
