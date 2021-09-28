import { Component } from '@angular/core';
import { Book } from './interfaces/book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Books are nice!';

  book: Book = {
    title: "Moby Dick",
    author: "Hermann Melville",
    abstract: "an abstract"
  }

  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
  }
  
}
