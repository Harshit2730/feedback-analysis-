import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './component/base/base.component';
import { FeedbackviewerComponent } from './component/base/feedbackviewer/feedbackviewer.component';
import { FeedbackcreatorComponent } from './component/base/feedbackcreator/feedbackcreator.component';
import { AnalysisComponent } from './component/base/analysis/analysis.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './component/toast/toast.component';
import { NewtoastComponent } from './component/toast/newtoast/newtoast.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    FeedbackviewerComponent,
    FeedbackcreatorComponent,
    AnalysisComponent,
    ToastComponent,
    NewtoastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
