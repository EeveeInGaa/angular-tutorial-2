import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() content: Book = { title: '', author: '', abstract: '' };

  customStyle = {
    color: "red",
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  handleDetailClick(click: MouseEvent) {
    click.preventDefault();
    console.log('Click Details-Link:', click);

  }

}
