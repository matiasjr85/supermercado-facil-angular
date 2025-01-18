import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FornecedorService } from '../../../../services/fornecedor.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-criar-fornecedor',
  standalone: true,
  templateUrl: './criar-fornecedor.component.html',
  styleUrls: ['./criar-fornecedor.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class CriarFornecedorComponent {
  fornecedorForm: FormGroup;
  mensagem: string | null = null;

  constructor(
    private fb: FormBuilder,
    private fornecedorService: FornecedorService,
    private router: Router
  ) {
    this.fornecedorForm = this.fb.group({
      nomeEmpresa: ['', [Validators.required]],
      rua: ['', [Validators.required]],
      numero: ['', [Validators.required, Validators.min(1)]],
      cep: ['', [Validators.required, Validators.min(10000000), Validators.max(99999999)]],
    });
  }

  voltar(): void {
    this.router.navigate(['/fornecedores']); // Voltar para a página de fornecedores
  }

  criarFornecedor(): void {
    if (this.fornecedorForm.valid) {
      const { nomeEmpresa, rua, numero, cep } = this.fornecedorForm.value;

      const fornecedor = {
        nomeEmpresa,
        endereco: {
          rua,
          numero,
          cep,
        },
      };

      this.fornecedorService.criarFornecedor(fornecedor).subscribe({
        next: () => {
          this.mensagem = 'Fornecedor criado com sucesso!';
          this.fornecedorForm.reset();
        },
        error: (err) => {
          console.error(err);
          this.mensagem = 'Erro ao criar fornecedor. Tente novamente.';
        },
      });
    }
  }
}
