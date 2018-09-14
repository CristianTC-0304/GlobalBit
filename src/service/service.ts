import { Injectable } from "@angular/core";
import { Models } from '../models/models';

@Injectable()
export class Service {
    model: Models[]

    constructor() {
        this.model = [ ]
     }

    getService() {
       if (localStorage.getItem('data') === null) {
           return this.model
       } else {
           this.model = JSON.parse(localStorage.getItem('data'))
           return this.model
       }
    }

    addService(data: Models) {
        this.model.push(data)
        let datas: Models[] = []
        if (localStorage.getItem('data') === null) {
            datas.push(data)
            localStorage.setItem('data', JSON.stringify(datas))
        } else {
            datas = JSON.parse(localStorage.getItem('data'))
            datas.push(data)
            localStorage.setItem('data', JSON.stringify(datas))
        }
    }

    deleteService(data) {
        for (let i = 0; i < this.model.length; i++) {
            if (data == this.model[i].cedula) {
                this.model.splice(i, 1)
                localStorage.setItem('data', JSON.stringify(this.model))
            }
        }
    }

    updateService(data) {
        for (let i = 0; i < this.model.length; i++) {
            if (data.cedula == this.model[i].cedula) {
                this.model[i] = Object.assign(data)
                localStorage.setItem('data', JSON.stringify(this.model))
            }
        }
    }

}