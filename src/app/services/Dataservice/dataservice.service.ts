import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private _dashboard = new Subject<Boolean>();
  dash$ = this._dashboard.asObservable();

  constructor() { }

 viewlist(value :boolean){
   this._dashboard.next(value);
 }

  changeMessage(message: string) {
    console.log(message,"dataservice");
    
    this.messageSource.next(message)
  }



}
