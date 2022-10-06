import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  dataOctavio!:any;


  constructor(
    private dataServices: DataService
  ) {
    dataServices.getOctavio().subscribe(datos=>{
      this.dataOctavio = datos;
    })
 
  }

  ngOnInit(): void {
    
  }

}
