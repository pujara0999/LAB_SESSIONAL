import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FeedbackDataService {
  api_url = 'http://localhost:3000/api/feedback/';
  feedbackList = [];
  feedbackObs = new Subject();

  constructor(private http: HttpClient) { }

  submit(name :string, reviewer :string, review :string, score :number) {
    const feedbackItem = {
      name: name,
      score: score
    }
    this.http.post<any>(this.api_url, feedbackItem)
      .subscribe(data => {
        this.feedbackList.push(data);
        this.feedbackObs.next([...this.feedbackList])
        console.log(data);
      })
  }

  getList() {
    this.http.get<any>(this.api_url).subscribe(data => {
      this.feedbackList = data;
      this.feedbackObs.next([...this.feedbackList]);
    })
  }

  getSubscription(): any {
    return this.feedbackObs.asObservable();
  }

  delete(id) {
    this.http.delete(this.api_url + id).subscribe(data => {
      this.feedbackList = this.feedbackList.filter(item => item._id !== id);
      this.feedbackObs.next([...this.feedbackList]);
    })
  }

  forceReload() {
    this.getList();
    this.feedbackObs.next([...this.feedbackList]);
  }

}
