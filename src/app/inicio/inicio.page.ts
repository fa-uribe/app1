import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombre : String;

  constructor(private route: ActivatedRoute) { 
      
    }

  ngOnInit() {
    this.nombre = this.route.snapshot.paramMap.get('nombre');
    console.log(this.nombre)
  }
  

}
