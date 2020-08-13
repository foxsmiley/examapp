import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { HttpRequestComponent } from 'src/app/provider/http-request/http-request.component';
import {Questions} from 'src/app/model/questions';
import {Solution} from 'src/app/model/solutions';
import {PossibleSolutions} from 'src/app/model/possible-solutios';
import { Validation } from 'src/app/provider/validation/validation';
// import swal from 'sweetalert2';
import { ValidationType } from 'src/app/provider/validation/validation-type.enum';

@Component({
  selector: 'app-capture-question',
  templateUrl: './capture-question.component.html',
  styleUrls: ['./capture-question.component.scss']
})
export class CaptureQuestionComponent implements OnInit {
  @Input() question:Questions;
  @Input() solution:Solution;
  @Input() possibleSolution:PossibleSolutions;
  @Output() result = new EventEmitter<any>();
  validation: Validation;   
   solutions: Solution[] = [];
  id: any ;
  stop: boolean;
  next:boolean;
  validation1: Validation;
  validation2: Validation;
  start: boolean;
  constructor(private http: HttpRequestComponent) {
    //this.http.get('', (solutions)=>this.getSolutions(solutions));
   }

  ngOnInit() {
    if (this.question == null)  this.question = new Questions();
    this.solution = new Solution();
    this.loadValidation();
    this.id = 1;
    this.stop = false;
    this.start = true;
    this.next = false;
    console.log('capture component')
    
  }
  getSolutions(solutions: Solution[]){
    this.solutions = solutions;
  }
  loadValidation(){
    this.validation = new Validation();
    this.validation1 = new Validation();
    this.validation2 = new Validation();
    this.validation.addField({ name: 'description', display: 'Question description', type: ValidationType.Required });
    this.validation.addField({ name: 'description', display: 'Solution description', type: ValidationType.Required });
    this.validation2.addField({ name: 'solutionId', display: 'Correct Answer', type: ValidationType.Required });
  }
  submitSolution(){
    
      // this.http.post('laundry/out', this.question, (result) => {
      //   // swal('Successfully saved laundry out');
      //   this.result.emit();
      //   this.count = this.count + 1
      // });
      this.solution.id = this.id;
      this.solutions.push(this.solution);
      this.solutions = this.solutions;
      this.id= this.id + 1;
      console.log(this.solutions)
      console.log(this.id)
      if(this.id == 5) {
        this.stop = !this.stop;
        this.start = false;
        // console.log(this.solutions)
      }
      
  }
  nextInput(){
    this.start = !this.start;
    this.next = true;
    
    
  }
  submit() {
    this.http.post('', this.question, (result) => {
      // swal('Successfully saved laundry out');
      this.result.emit();
    });
  }
}


