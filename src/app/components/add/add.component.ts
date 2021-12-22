import { Component, OnInit } from '@angular/core';
import { Banco, BancoService } from 'src/app/services/banco.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  transfer: Banco = {
    id_transfer: '',
    nome: '',
    valor: '',
    agencia: '',
    conta: '',
    digito: ''
  }

  constructor(private BancoService: BancoService, private router: Router) { }

  ngOnInit(): void {
  }

  adicionar() {
    delete this.transfer.id_transfer

    this.BancoService.addDado(this.transfer).subscribe({
      next: (result) => console.log(result),
      error: (erro) => console.error(erro),
      complete: () => console.info('Complete')
    })

    this.router.navigate(['/banco'])
  }
} 
