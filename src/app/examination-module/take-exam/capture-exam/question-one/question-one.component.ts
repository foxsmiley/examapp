import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Questions } from 'src/app/model/questions';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.scss']
})
export class QuestionOneComponent implements OnInit {
  @Input() examResponse: Questions;
  @Output() result = new EventEmitter<Questions>();
@Output() rezult = new EventEmitter<Questions>();
examQuestions:any[]
question:Question;
score:any = 0;
  constructor() { 
 this.http.get('/questions', (questions) => this.getRooms(questions))
}

  ngOnInit() {
    if (this.examResponse == null)this.examResponse = new Questions();
this.question = new Question();
  }
setExamQuestion(examQuestions:any[]){
this.examQuestions = examQuestions;
let question = this.examQuestions[Math.floor(Math.random()* this.examQuestion.length];
this.examQuestions = this.setNextQuestions(question);
this.question = question;
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
}
