import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { HttpRequestComponent } from '../provider/http-request/http-request.component';
// import { FormViewComponent } from '../provider/form-view/form-view.component';
// import { SearchableDropdownComponent } from '../provider/searchable-dropdown/searchable-dropdown.component';
// import { TablePaginationComponent } from '../provider/table/table-pagination/table-pagination.component';
// import { TableViewComponent } from '../provider/table/table-view/table-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule ,
  
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    // HttpRequestComponent,
    // FormViewComponent,
    // SearchableDropdownComponent,
    // TablePaginationComponent,
    // TableViewComponent
  ],
  exports: [
    // TableViewComponent,
    // TablePaginationComponent,
    // SearchableDropdownComponent,
    // FormViewComponent,
    // HttpRequestComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
