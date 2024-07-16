import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';
import { Statsdetails } from 'src/app/models/Statsdetails.interface';
import { FeedbackService } from 'src/app/service/feedback/feedback.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit, AfterViewInit {

  stats:Statsdetails={
    overall_sentiment: 0,
    positive_rating: 0,
    negative_rating: 0,
    neutral_rating: 0,
    total_count: 0
  };

  trend_data:{
    x:number,
    y:number
    }[]=[];
  wordCount : {
              key:string,
              value:number
              }[]=[];
  @ViewChild('wordcloud') wordcloud!:ElementRef;
  @ViewChild('trend') trend!:ElementRef;


  constructor(
    private feedbackService:FeedbackService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    
    Chart.register(WordCloudController, WordElement, ...registerables);
  }
  
  ngAfterViewInit(): void {
    this.data_loader();
  }
  
  data_loader(){
    this.feedbackService.getAnalysis().subscribe(
      (res:any)=>{
        this.stats=res.stats
        this.wordCount = res.words
        this.worCloudArchitecture();

        this.trend_data=res.trend
        this.trendArchitecture();
      },
      (err:any)=>{
          this.toastService.showToast.next({
            show:true,
            message:"Unable to load data",
            messagetype:"error"
          })
        }
      )
  }

  worCloudArchitecture(){
    const chart = new Chart(this.wordcloud.nativeElement.getContext("2d"), {
      type:"wordCloud",
      data: {
        labels: this.wordCount.map((d) => d.key),
        datasets: [
          {
            label: "",
            data: this.wordCount.map((d) => 5 + d.value * 5)
          }
        ]
      },
      options: {
        plugins:{
          title: {
            display: false,
            text: "Feedback Word Cloud"
          },
          legend:{
            display:false
          }
          

        }
      }
    });
  }

  trendArchitecture(){
    const chart = new Chart(this.trend.nativeElement.getContext("2d"), {
      type:"scatter",
      data: {
        datasets: [{
          label: 'Sentiment',
          data: this.trend_data,
          backgroundColor: 'rgb(126, 127, 154)'
        }],
      },

      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      },
    });
  }

}
