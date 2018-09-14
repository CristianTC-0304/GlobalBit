import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../service/service';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dataList: any
  constructor(
    public navCtrl: NavController, 
    public service: Service,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
  ) {}

  ionViewDidLoad() {
    this.getData()
  }

  getData() {
    this.dataList = this.service.getService()
  }

  edit(data) {
    const prompt = this.alertCtrl.create({
      title: 'Actualizar',
      message: 'Actualizar datos de usuario',
      inputs: [
        {
          name: 'nombre_completo',
          placeholder: 'Nombre',
          value: data.nombre_completo,
        },
        {
          name: 'cedula',
          placeholder: 'Cedula',
          value: data.cedula,
        },
        {
          name: 'ciudad',
          placeholder: 'Ciudad',
          value: data.ciudad
        },
        {
          name: 'email',
          placeholder: 'Email',
          value: data.email
        },
        {
          name: 'telefono',
          placeholder: 'Teléfono',
          value: data.telefono
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('cancelar');
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            this.service.updateService(data)
            this.messageEdit()
          }
        }
      ]
    });
    prompt.present()
  }

  messageEdit() {
    let toast = this.toastCtrl.create({
      message: 'Se ha editado Correctamente al Usuario',
      duration: 3000,
      position: 'top'
    }); 

    toast.present()
  }

  delete(document) {
    const prompt = this.alertCtrl.create({
      title: 'Eliminar',
      message: 'Estas seguro de eliminar este usuario',
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('cancelar');
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            this.service.deleteService(document)
            this.messageDelete()
          }
        }
      ]
    });
    prompt.present();
  }

  messageDelete() {
    let toast = this.toastCtrl.create({
      message: 'Se ha Eliminado Correctamente al Usuario',
      duration: 3000,
      position: 'top'
    }); 

    toast.present()
  }
}
