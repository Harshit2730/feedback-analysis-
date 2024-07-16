import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-newtoast',
  templateUrl: './newtoast.component.html',
  styleUrls: ['./newtoast.component.css']
})
export class NewtoastComponent implements OnInit, OnDestroy {

  private showToastSubscription: Subscription = new Subscription();
  showToast:boolean = false;
  toastMessage:string ='Some weird error :(';
  messageType:string = '';
  constructor(
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.showToastSubscription = this.toastService.showToast.subscribe(
      (showToastResponse) =>{
        this.showToast = showToastResponse.show,
        this.messageType = showToastResponse.messagetype
        this.toastMessage = showToastResponse.message
        this.closeToast();
      }
    )
  }

  closeToast(){
    const holdToast=this
    setTimeout(function(){
      holdToast.showToast=false;
    },5000)

  }

  ngOnDestroy(): void {
    this.showToastSubscription.unsubscribe();
  }

}
