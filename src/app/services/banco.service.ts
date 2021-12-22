import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  // informando o angular que todas as rotinas realizadas no backend (post, put, get e delete) serão acessadas através dessa rota
  url = '/banco'

  constructor(private http: HttpClient) { }

  getTodas(){
    return this.http.get(this.url)
  }

  getUma(id: any) {
    return this.http.get(this.url + '/' + id)
  }

  addDado(transfer:Banco) {
    return this.http.post(this.url, transfer)
  }

  deleteDado(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }

  editDado(id:any, transfer:Banco){
    return this.http.put(`${this.url}/${id}`, transfer)
  }
}

export interface Banco{
  id_transfer?:string
  nome?:string
  valor?:string
  agencia?:string
  conta?:string
  digito?:string
}
