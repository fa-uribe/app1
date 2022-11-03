import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController, NavController, NavParams } from '@ionic/angular';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  nombre  : String;
  contrasena : String;
  mensaje : String;

  constructor(private alertController: AlertController,
    private toastController: ToastController,
    private router: Router, public navCtrl: NavController,
    private apirest: ApirestService
    ) { }

  ngOnInit(): void {
    this.apirest.getUsers();
    this.apirest.listado
  }

  async checkear(nom: HTMLInputElement, cont: HTMLInputElement)
  {
    if(nom.value == "")
    {
      this.mensaje = "Ingrese nombre de usuario";
    }
    else if(cont.value == "")
    {
      this.mensaje = "Por favor ingrese su contraseña";
    }
    else if(cont.value != "1234"){
      this.mensaje = "Contraseña incorrecta";
    }
    else
    {
      this.router.navigate(['/inicio', this.nombre]);
    }
  }
}

