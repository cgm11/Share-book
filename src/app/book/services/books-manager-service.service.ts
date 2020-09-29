import { Injectable } from '@angular/core';
import { IBooksList } from '../models/books';



@Injectable({
  providedIn: 'root'
})
export class BooksManagerServiceService {
  bookList: Array<IBooksList> = [];

  constructor() {
    this.bookList = [
      {
        author: 'Diana Uribe',
        description: 'baet',
        imageUrl: 'https://tiendateatral.com/8807-large_default/libro-brujula-para-el-mundo-contemporaneo.jpg',
        name: 'Brujula'
      }
    ];
  }

  getBookList(){
    console.log(this.bookList);
    return this.bookList;
  }

  addNewBook(newBook: IBooksList) {
    this.bookList = [...this.bookList, newBook];
    console.log(this.bookList);
  }
}
