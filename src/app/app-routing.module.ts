import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackcreatorComponent } from './component/base/feedbackcreator/feedbackcreator.component';
import { FeedbackviewerComponent } from './component/base/feedbackviewer/feedbackviewer.component';
import { AnalysisComponent } from './component/base/analysis/analysis.component';
import { BaseComponent } from './component/base/base.component';

const routes: Routes = [
  {
    path:'',
    component:BaseComponent,
    children:[
      {
        path:'',
        component:FeedbackcreatorComponent
      },
      {
        path:'feedbacks',
        component:FeedbackviewerComponent
      },
      {
        path:'analysis',
        component:AnalysisComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


