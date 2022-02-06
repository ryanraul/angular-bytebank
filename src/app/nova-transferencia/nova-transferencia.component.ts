import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from "../models/transferencia.model";
import { TransferenciasService } from "../services/transferencias.service";

@Component({
   selector: 'app-nova-transferencia',
   templateUrl: './nova-transferencia.component.html',
   styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent{

   @Output() aoTransferir = new EventEmitter<any>();

   valor: number;
   destino: number;

   constructor(private service: TransferenciasService,
               private router: Router){
      
   }

   transferir(){
      var transferencia: Transferencia = {valor: this.valor, destino: this.destino};
      this.service.adicionar(transferencia).subscribe(res => {
         console.log(res);
         this.limparCampos();
         this.router.navigateByUrl('extrato');
      },
         error => console.error(error)
      );
   }

   limparCampos(){
      this.valor = 0;
      this.destino = 0;
   }
}