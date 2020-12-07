import { Component, OnInit } from '@angular/core';
import { FeedbackDataService } from '../feedback-data.service';

@Component({
  selector: 'app-feedback-tool',
  templateUrl: './feedback-tool.component.html',
  styleUrls: ['./feedback-tool.component.css']
})
export class FeedbackToolComponent implements OnInit {
  newtitle :string;
  newreviewer :string;
  newreview :string;
  newscore :number;
  constructor(
    private fbService: FeedbackDataService // inject service
  ) { }

  ngOnInit( ): void {}

  add() {
    console.log(this.newtitle, this.newreviewer, this.newreview, this.newscore);
    this.fbService.submit(this.newtitle, this.newreviewer, this.newreview, this.newscore)
  }

}
