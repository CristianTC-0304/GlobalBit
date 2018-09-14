import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Service } from '../../service/service';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular'



@IonicPage()
@Component({
  selector: 'page-crear',
  templateUrl: 'crear.html',
})
export class CrearPage {

  ciudades: any
  model: FormGroup


  constructor(
    public navCtrl: NavController,
     public navParams: NavParams, 
     public service: Service, 
     private formBuilder: FormBuilder,
     private toastCtrl: ToastController,
    ) {
    this.ciudades = [
      {nombre: 'Neiva'},
      {nombre: 'Bogota'},
      {nombre: 'Medellin'},
      {nombre: 'Cali'}
    ]

    this.model = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre_completo: ['', Validators.required],
      ciudad: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearPage');
  }

  logForm() {
    console.log(this.model.value);
    this.service.addService(this.model.value)
    this.model.reset()
    this.messageOnSave()
    this.navCtrl.push(HomePage)
  }

  messageOnSave() {
    let toast = this.toastCtrl.create({
      message: 'Se ha Creado Correctamente al Usuario',
      duration: 3000,
      position: 'top'
    }); 

    toast.present()
  }

}
