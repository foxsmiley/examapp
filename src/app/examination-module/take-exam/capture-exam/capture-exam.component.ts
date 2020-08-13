import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Questions } from 'src/app/model/questions';

@Component({
  selector: 'app-capture-exam',
  templateUrl: './capture-exam.component.html',
  styleUrls: ['./capture-exam.component.scss']
})
export class CaptureExamComponent implements OnInit {
  @Input() body: Questions;
  examResponse : Questions;
  question: Questions;
  step:number = 0;
  constructor() { }

  ngOnInit(){
    // if (this.examResponse == null)  this.examResponse = new Questions();
  }
  next() {
    if (this.step < 4)
      this.step++;
  }

  prev() {
    if (this.step > 1)
      this.step--;
  }

  
  loadResult($event) {
    this.examResponse = $event;
    this.examQuestion = $event;
    this.next();
  }
}

