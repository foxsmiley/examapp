import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Questions } from 'src/app/model/questions';

@Component({
  selector: 'app-question-four',
  templateUrl: './question-four.component.html',
  styleUrls: ['./question-four.component.scss']
})
export class QuestionFourComponent implements OnInit {
  @Input() examResponse: Questions;
  @Output() result = new EventEmitter<Questions>();
 question:Questions
answeredQuestions:Questions;
  constructor() { }

  ngOnInit(){
  console.log(this.examQuestions);
    if (this.examResponse == null)this.examResponse = new Questions();
    this.question = new Questions();
    this.setExamQuestion(examQuestions)

  }
 setExamQuestion(examQuestions:any[]){
this.examQuestions = examQuestions;
let question = this.examQuestions[Math.floor(Math.random()* this.examQuestion.length];
this.question = question;
this.answeredQuestion = question;
}
  next() {
if (examResponse .solutionId == this.answeredQuestion.solutionId){
this.score++
this.correct = true;
}

this.result.emit(this.examResponse);
this.rezult.emit(this.examQuestions);
this.scoresult.emit(score);
  }

}

