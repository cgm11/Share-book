import { Component, OnInit } from '@angular/core';

import { IBooksList } from '../../models/books';
import { BooksManagerServiceService } from '../../services/books-manager-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  booklist: IBooksList[] = [];
  
  constructor(private booksManagerServiceService: BooksManagerServiceService) {
    this.booklist = booksManagerServiceService.getBookList();
  }

  ngOnInit(): void {
    this.booklist = this.booksManagerServiceService.bookList;
    //this.addNewBookTest();
  }

  addNewBookTest() {
    this.booksManagerServiceService.addNewBook({
      author: 'Diana Uribe',
      description: 'baet',
      imageUrl: 'https://tiendateatral.com/8807-large_default/libro-brujula-para-el-mundo-contemporaneo.jpg',
      name: 'Brujula'
    });
  }
}
