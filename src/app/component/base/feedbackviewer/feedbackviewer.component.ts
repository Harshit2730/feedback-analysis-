import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Feedback } from 'src/app/models/feedback.interface';
import { FeedbackService } from 'src/app/service/feedback/feedback.service';

@Component({
  selector: 'app-feedbackviewer',
  templateUrl: './feedbackviewer.component.html',
  styleUrls: ['./feedbackviewer.component.css']
})
export class FeedbackviewerComponent implements OnInit, AfterViewInit, OnDestroy{

  @ViewChild(DataTableDirective, {static: false})
  datatableElement!: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  feedbacks: Feedback[]=[];

  constructor(
    private feedbackService: FeedbackService
  ) { }

  ngOnInit(): void {
    this.dtOptions ={ 
      paging:true,
      processing:true
    };

    this.loadFeedback();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender():void{
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) =>{
      dtInstance.destroy();
      this.dtTrigger.next();
    })
  }

  loadFeedback():void{
    this.feedbackService.getFeedbacks().subscribe(
      (res:any)=>{
        this.feedbacks=res.data
        this.rerender();
      },
      (err:any)=>{

      }
    )
  }

}
