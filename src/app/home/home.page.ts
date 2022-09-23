import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController} from '@ionic/angular';


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
    private router: Router,
    ) { }

  ngOnInit(): void {
    
  }


  async checkear(nom: HTMLInputElement, cont: HTMLInputElement)
  {
    if(nom.value == "")
    {
      const toast = await this.toastController.create({
        message : "Ingrese nombre de usuario",
        duration: 2000
      })
      toast.present();
    }
    else if(cont.value == "")
    {
      const toast = await this.toastController.create({
        message : "Ingrese contraseña",
        duration: 2000
      })
      toast.present();
    }
    else
    {
      this.nombre = nom.value;
      console.log(this.nombre);
      this.router.navigate(['/inicio', this.nombre]);
    }
  }

}