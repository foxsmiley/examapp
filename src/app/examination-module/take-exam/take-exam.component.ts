import { Component, OnInit, } from '@angular/core';
import { HttpRequestComponent } from 'src/app/provider/http-request/http-request.component';
import { TableCompose } from 'src/app/provider/table/table-compose';
import { DataType } from 'src/app/provider/table/data-type.enum';

@Component({
  selector: 'app-take-exam',
  templateUrl: './take-exam.component.html',
  styleUrls: ['./take-exam.component.scss']
})
export class TakeExamComponent implements OnInit {
  examRecords: any[];
  tableData: TableCompose;
  selected: any;
  isAdd: boolean;
  constructor(private http: HttpRequestComponent) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loadexamRecords();
    // this.http.get('url', (examRecords) => this.loadexamRecords(examRecords));
    
  }
 

  loadexamRecords() {
    var examRecords =[{
      studentNumber:'String String String String string string',
      studentName:'String',
      score: 8,
      dateCreated:'07-07-2020'
    },
    {
      studentNumber:'String String String String string string',
      studentName:'String',
      score: 8,
      dateCreated:'07-07-2020'
    },
    {
      studentNumber:'String String String String string string',
      studentName:'String',
      score: 8,
      dateCreated:'07-07-2020'
    },
    {
      studentNumber:'String String String String string string',
      studentName:'String',
      score: 8,
      dateCreated:'07-07-2020'
    },
    {
      studentNumber:'String String String String string string',
      studentName:'String',
      score: 8,
      dateCreated:'07-07-2020'
    },
    {
      studentNumber:'String String String String string string',
      studentName:'String',
      score: 8,
      dateCreated:'07-07-2020'
    },
    {
      studentNumber:'String String String String string string',
      studentName:'String',
      score: 8,
      dateCreated:'07-07-2020'
    },
    {
      studentNumber:'String String String String string string',
      studentName:'String',
      score: 8,
      dateCreated:'07-07-2020'
    },
    {
      studentNumber:'String String String String string string',
      studentName:'String',
      score: 8,
      dateCreated:'07-07-2020'
    },
    {
      studentNumber:'String String String String string string',
      studentName:'String',
      score: 8,
      dateCreated:'07-07-2020'
    },
    {
      studentNumber:'String String String String string string',
      studentName:'String',
      score: 8,
      dateCreated:'07-07-2020'
    },
   
  ];
    
    this.examRecords = examRecords;
    this.tableData = new TableCompose()
      .composeHeader('studentNumber', 'Student Number', DataType.Plain)
      .composeHeader('studentName', 'Student Name', DataType.Plain)
      .composeHeader('score', 'Result Score', DataType.Plain)
      .composeHeader('dateCreated', 'Date taken', DataType.Date)
      
      .setBody(this.examRecords);
  }

  itemClick(item) {
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