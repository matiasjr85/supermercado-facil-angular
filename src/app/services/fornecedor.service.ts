import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  private baseUrl = 'http://localhost:3000/fornecedores'; // Substitua pelo endpoint correto

  constructor(private http: HttpClient) {}

  /**
   * Obtém a lista de fornecedores.
   */
  obterFornecedores(): Observable<{ _id: string; nomeEmpresa: string }[]> {
    return this.http.get<{ _id: string; nomeEmpresa: string }[]>(`${this.baseUrl}`);
  }
  
}
