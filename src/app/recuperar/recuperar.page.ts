import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  mensaje: String;
  nombre: String;

  constructor(private alertController: AlertController,
    private toastController: ToastController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  async checkear(nom: HTMLInputElement, cont: HTMLInputElement, cont2: HTMLInputElement)
  {
    if(nom.value == "")
    {
      this.mensaje = "Falta el nombre";
    }
    else if(cont.value == "")
    {
      this.mensaje = "Por favor ingrese su contraseña";
    }
    else if(cont2.value == "")
    {
      this.mensaje = "Por favor ingrese su contraseña nuevamente";
    }
    else if(cont.value != cont2.value)
    {
      this.mensaje = "Las contraseñas deben coincidir";
    }
    else
    {
      this.navCtrl.navigateRoot('/home');
    }
  }
}
