import { Transferencia } from './../models/transferencia.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from './../services/transferencia/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovatransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router,
  ) {}

  transferir() {
    console.log('Solicitada nova transferencia ');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.transferenciaService.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampo();
        this.router.navigateByUrl("/extrato");
      },
      (error) => console.error(error)
    );
  }

  limparCampo() {
    this.valor = 0;
    this.destino = 0;
  }
}
