import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

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
    private toastController: ToastController) {}

  ngOnInit(): void {
    
  }
  async grabar(nom: HTMLInputElement, cont: HTMLInputElement)
  {
    if(nom.value == "")
    {
      this.mensaje = "Falta el nombre";
      const toast = await this.toastController.create({
        message : "Ingrese nombre de usuario",
        duration: 2000
      })
      toast.present();
    }
    else if(cont.value == "")
    {
      this.mensaje = "Por favor ingrese su contraseña";
    }
  }

}