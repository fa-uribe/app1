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
      this.nombre = (route.snapshot.params['nombre']);
    }

  ngOnInit() {
  }

}
