import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.scss']
})
export class Hijo2Component implements OnInit {
 
  @Output() cambio = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
cambiar(){
  this.cambio.emit("datoEmitido");
}
}