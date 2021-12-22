import { Component, OnInit } from '@angular/core';
import { Banco, BancoService } from 'src/app/services/banco.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  transfer: Banco = {
    id_transfer: '',
    nome: '',
    valor: '',
    agencia: '',
    conta: '',
    digito: ''
  }

  constructor(private BancoService:BancoService,
              private router:Router,
              private rotaAtiva:ActivatedRoute) { }

  ngOnInit(): void {
    const id_in = <any>this.rotaAtiva.snapshot.params['id']
    console.log("id de entrada: " + id_in)
    this.BancoService.getUma(id_in).subscribe({
      next:(res) => {
        console.log(res)
        this.transfer = res
      },
      error: (err) => console.error(err),
      complete: () => console.info("Transação encontrada com sucesso!")
    })
  }

  editar(){
    this.BancoService.editDado(this.transfer.id_transfer,this.transfer).subscribe({
      next: (res) => console.log("Dados da transação editada com sucesso"),
      error: (erro) => console.error(erro),
      complete: () => console.info("Dados da transação editada com sucesso!")
    })
    this.router.navigate(['/banco'])
  }

} 
