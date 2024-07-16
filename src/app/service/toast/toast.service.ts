import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  public showToast: Subject<{
    show:boolean,
    message: string, 
    messagetype:string,
  }> = new Subject();
  
  constructor() { }
}
