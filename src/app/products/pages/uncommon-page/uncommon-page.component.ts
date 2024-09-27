import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18nSelect
  public name:string = 'Ruben';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient(): void {
    if (this.name === 'Melissa') {
        this.name = 'Ruben';
        this.gender = 'male'
    } else {
        this.name = 'Melissa';
        this.gender = 'female'
    }
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernan', 'Melissa', 'Jorge', 'Natalia', 'Toby']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  deleteClient():void{
    this.clients.pop();
  }

  //Key value pipe
  public person = {
    name: 'Ruben',
    age: 22,
    address: 'Puebla, Mexico'

  }
  //Async pipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value)),
  );

  public promiseValue:Promise<string> = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    },3500);
  })



}
