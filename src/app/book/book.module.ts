import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { SharedModule } from '../shared/shared.module'


@NgModule({
  declarations: [BookListComponent, BookCreateComponent],
  exports: [BookListComponent , BookCreateComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BookModule { }
