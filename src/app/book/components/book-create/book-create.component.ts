import { Component, OnInit, Input } from '@angular/core';
import { BooksManagerServiceService } from '../../services/books-manager-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  constructor( private booksManagerServiceService: BooksManagerServiceService,
               private router: Router) { }

  ngOnInit(): void {
  }

  addNewBook(name: string, author: string, imageUrl: string, description: string): void{
    this.booksManagerServiceService.addNewBook({
      author,
      description,
      imageUrl,
      name
    });
    this.router.navigate(['/']);
  }

}
