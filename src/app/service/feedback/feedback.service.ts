import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceHelper } from '../HttpServicehelper.helper';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService extends HttpServiceHelper{

  constructor(
    private http:HttpClient
  ) { 
    super();
  }

  
  getFeedbacks():Observable<any>{
    return this.http.get<{}>(
      `${HttpServiceHelper.backendbaseurl}/feedback`
    );
  }

  getAnalysis():Observable<any>{
    return this.http.get<{}>(
      `${HttpServiceHelper.backendbaseurl}/feedback/stats`
    );
  }

  postFeedback(feedback:string, rating: number):Observable<any>{
    return this.http.post<{message:string}>(
      `${HttpServiceHelper.backendbaseurl}/feedback`,
      {rating, feedback}
    )
  }
}
