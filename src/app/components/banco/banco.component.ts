import { Component, OnInit } from '@angular/core';
import { BancoService, Banco } from 'src/app/services/banco.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})

export class BancoComponent implements OnInit {
  Bancos: Banco[]

  constructor(private BancoService: BancoService, private router: Router) {
    this.Bancos = []
  }

  ngOnInit(): void {
    this.transacoes()
  }

  transacoes() {
    this.BancoService.getTodas().subscribe({
      next: (res) => {
        console.log(res);
        this.Bancos = <any>res;
      },
      error: (err) => console.error(err),
      complete: () => console.info('Complete')
    })
  }

  excluir(id: any) {
    this.BancoService.deleteDado(id).subscribe({
      next: (res) => {
        console.log('Transação Removida')
        this.transacoes()
      },
      error: (err) => console.error(err),
      complete: () => console.info('complete')
    })
  }

  editar(id: any) {
    this.router.navigate([`/edit/${id}`])
  }
}
