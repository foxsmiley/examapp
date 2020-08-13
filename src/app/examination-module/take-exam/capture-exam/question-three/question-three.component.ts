import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Questions } from 'src/app/model/questions';

@Component({
  selector: 'app-question-three',
  templateUrl: './question-three.component.html',
  styleUrls: ['./question-three.component.scss']
})
export class QuestionThreeComponent implements OnInit {
  @Input() examResponse: Questions;
  @Output() result = new EventEmitter<Questions>();
 question:Questions
answeredQuestion: Questions;
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
this.examQuestions = this.setNextQuestions(question);
this.question = question;
this.answeredQuestion = question;
}
setNextQuestions(question){
this.examQuestions = this.examQuestions.filter(item=>item.id !== question.id)
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