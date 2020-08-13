import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';

import { FormViewComponent } from './provider/form-view/form-view.component';
import { HttpRequestComponent } from './provider/http-request/http-request.component';
import { TablePaginationComponent } from './provider/table/table-pagination/table-pagination.component';
import { TableViewComponent } from './provider/table/table-view/table-view.component';
import {UserModuleComponent} from './user-module/user-module.component'
import {HomeComponent}from './home/home.component'
import {ExaminationModuleComponent} from './examination-module/examination-module.component';
import { UserHomeComponent } from './user-module/user-home/user-home.component';
import { StudentDashboardComponent } from './user-module/student-dashboard/student-dashboard.component';
import { ExaminationHomeComponent } from './examination-module/examination-home/examination-home.component';
import { SetQuestionsComponent } from './examination-module/set-questions/set-questions.component';
import { TakeExamComponent } from './examination-module/take-exam/take-exam.component';
import { ExaminationRecordComponent } from './examination-module/examination-record/examination-record.component';
import { UsersComponent } from './user-module/users/users.component';
import { CaptureQuestionComponent } from './examination-module/set-questions/capture-question/capture-question.component';
import { CaptureExamComponent } from './examination-module/take-exam/capture-exam/capture-exam.component';
import { QuestionOneComponent } from './examination-module/take-exam/capture-exam/question-one/question-one.component';
import { QuestionTwoComponent } from './examination-module/take-exam/capture-exam/question-two/question-two.component';
import { QuestionThreeComponent } from './examination-module/take-exam/capture-exam/question-three/question-three.component';
import { QuestionFourComponent } from './examination-module/take-exam/capture-exam/question-four/question-four.component';

import { ConfirmInformationComponent } from './examination-module/take-exam/capture-exam/confirm-information/confirm-information.component';
import { LoginComponent } from './login/login.component'
import { HttpInterceptorService } from './http-interceptor.service';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
MainComponent,
    FormViewComponent,
    HttpRequestComponent,
    TablePaginationComponent,
    TableViewComponent,
    HomeComponent,
    UserModuleComponent,
    ExaminationModuleComponent,
    UserHomeComponent,
    StudentDashboardComponent,
    ExaminationHomeComponent,
    SetQuestionsComponent,
    TakeExamComponent,
    ExaminationRecordComponent,
    UsersComponent,
    CaptureQuestionComponent,
    CaptureExamComponent,
    QuestionOneComponent,
    QuestionTwoComponent,
    QuestionThreeComponent,
    QuestionFourComponent,
   
    ConfirmInformationComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
SharedModule,
    // MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      // {
      //   path: 'examination', component: ExaminationModuleComponent, children: [
      //     { path: '', component: ExaminationHomeComponent },
      //     { path: 'set-questions', component: SetQuestionsComponent },
      //     { path: 'take-exam', component: TakeExamComponent },
      //     { path: 'examination-records', component: ExaminationRecordComponent },
          
      //   ]
      // },
      
      // {
      //   path: 'user-management', component: UserModuleComponent, children: [
      //     { path: '', component: UserHomeComponent },
      //     { path: 'users', component: UsersComponent },
      //     { path: 'dashboard', component: StudentDashboardComponent },

      //   ]
      // },
      { path: 'home', component: HomeComponent,children:[
        {path:'',component:MainComponent},
        {
          path: 'examination', component: ExaminationModuleComponent, children: [
            { path: '', component: ExaminationHomeComponent },
            { path: 'set-questions', component: SetQuestionsComponent },
            { path: 'take-exam', component: TakeExamComponent },
            { path: 'examination-records', component: ExaminationRecordComponent },
            
          ]
        },
        {
          path: 'user-management', component: UserModuleComponent, children: [
            { path: '', component: UserHomeComponent },
            { path: 'users', component: UsersComponent },
            { path: 'dashboard', component: StudentDashboardComponent },
  
          ]
        },
      ]},
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ])
  ],
  providers: [
     HttpRequestComponent,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
