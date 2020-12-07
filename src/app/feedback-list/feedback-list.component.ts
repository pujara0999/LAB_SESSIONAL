import { Component, OnInit } from '@angular/core';
import { FeedbackDataService } from '../feedback-data.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  public subscription;
  public feedbackList;

  constructor(
    private fbService: FeedbackDataService // inject service
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // onDestroy cancels the subscribe request
  }

  ngOnInit(): void {
    this.subscription = this.fbService.getSubscription().subscribe(msg => {
      this.feedbackList = msg;
    });
    this.fbService.forceReload();
  }

}
