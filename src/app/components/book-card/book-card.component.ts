import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() content: Book = { title: '', author: '', abstract: '' };
  @Output() detailClick = new EventEmitter<Book>();

  customStyle = {
    color: "blue",
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  handleDetailClick(click: MouseEvent) {
    click.preventDefault();
    console.log(`The book "${this.content.title}" has been clicked.`);
    this.detailClick.emit(this.content);
  }

}
