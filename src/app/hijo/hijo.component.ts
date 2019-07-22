import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() propiedadUno:string;
  @Input() propiedadDos:string;

  constructor() { }

  ngOnInit() {
    console.log(this.propiedadUno)
    console.log(this.propiedadDos)

  }


}
