import { Component, OnInit, } from '@angular/core';
import { HttpRequestComponent } from 'src/app/provider/http-request/http-request.component';
import { TableCompose } from 'src/app/provider/table/table-compose';
import { DataType } from 'src/app/provider/table/data-type.enum';


@Component({
  selector: 'app-set-questions',
  templateUrl: './set-questions.component.html',
  styleUrls: ['./set-questions.component.scss']
})
export class SetQuestionsComponent implements OnInit {
 
  questions: any[];
  possibleSolutions: any[];
  solutions: any[];
  tableData: TableCompose;
  selected: any;
  isAdd: boolean;
  constructor(private http: HttpRequestComponent) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loadQuestions();
    // this.http.get('url', (questions) => this.loadQuestions(questions));
    // this.http.get('url',(solutions) => this.loadSolutions(solutions));
    // this.http.get('url',(possibleSolutions)=> this.loadPossibleSolutions(possibleSolutions));
  }
  loadPossibleSolutions(possibleSolutions: any) {
    throw new Error("Method not implemented.");
  }
  loadSolutions(solutions: any) {
    throw new Error("Method not implemented.");
  }

  loadQuestions() {
    var questions =[{
      description:'String String String String string string',
      solution:'String'
    },
    {
      description:'String String String String string string',
      solution:'String'
    },
    {
      description:'String String String String string string',
      solution:'String'
    },
  ];
    
    this.questions = questions;
    this.tableData = new TableCompose()
      .composeHeader('description', 'Description', DataType.Plain)
      .composeHeader('solution', 'Description', DataType.Plain)
      
      .setBody(this.questions);
  }

  itemClick(item) {
    item.possibleSolution1 = "a";
    item.possibleSolution2 ="b";
    item.possibleSolution3 = "c"
    this.selected = item;
    this.isAdd = false;
  }

  addClick() {
    this.selected = {};
    this.isAdd = true;
  }

  editClick(item) {
    
    this.selected = item;
    this.isAdd = true;
  }

  addedClick() {
    this.getData();
    this.isAdd = false;
  }
}