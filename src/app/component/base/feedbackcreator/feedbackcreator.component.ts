import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/service/feedback/feedback.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-feedbackcreator',
  templateUrl: './feedbackcreator.component.html',
  styleUrls: ['./feedbackcreator.component.css']
})
export class FeedbackcreatorComponent implements OnInit {

  feedbackform:FormGroup=new FormGroup({
    rating: new FormControl('', Validators.required),
    feedback: new FormControl('', Validators.required)
  })


  constructor(
    private feedbackService:FeedbackService,
    private toastService:ToastService
  ) {
   }

  ngOnInit(): void {
  }

  postFeedback():void{
    this.feedbackService.postFeedback(this.feedbackform.value.feedback, this.feedbackform.value.rating)
    .subscribe(
      (res)=>{
        this.toastService.showToast.next({
          show: true,
          message:"Feedback shared",
          messagetype:"success"
        })
      },
      (error)=>{
        this.toastService.showToast.next({
          show: true,
          message:"Unable to post feedback",
          messagetype:"error"
        })
      }
    )

  }

}
