import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApirestService } from '../apirest.service';
import { StoragesService } from '../storages.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  nombre  : string;
  contrasena : String;
  mensaje : String;
  lista = [];

  constructor(private router: Router,
    private apirest: ApirestService,
    private storages : StoragesService
    ) { }

  ngOnInit(): void {
    this.apirest.getUsers();
    this.lista = this.apirest.listado;
    console.log(this.lista);
    this.storages.init();
  }

  async checkear(nom: HTMLInputElement, cont: HTMLInputElement)
  {
    this.nombre = nom.value;
    //console.log(this.apirest.listado.find(({username}) => username === this.nombre));
    this.lista = this.apirest.listado.find(({username}) => username === this.nombre);
    //console.log(this.lista);
 
   
    if(nom.value == "")
    {
      this.mensaje = " Ingrese nombre de usuario";
    }
    else if(cont.value == "")
    {
      this.mensaje = " Por favor, ingrese su contraseña";
    }
    else if(!this.apirest.listado.find(({username}) => username === this.nombre)){
      this.mensaje = " Usuario no existe";
    }
    else if(cont.value != "1234"){
      this.mensaje = " Contraseña incorrecta";
    }
    else
    {
      this.storages.agregar('id', this.lista['id']);
      this.router.navigate(['/inicio', this.lista['id']]);
      nom.value = '';
      cont.value = '';
      this.mensaje = '';
    }
  }
}

