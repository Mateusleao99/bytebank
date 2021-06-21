import { TransferenciaService } from './../services/transferencia/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias:any[] = [];

  constructor( private transferenciaservice: TransferenciaService) { }

  ngOnInit(): void {
    this.transferencias = this.transferenciaservice.transferencias;
  }

}
