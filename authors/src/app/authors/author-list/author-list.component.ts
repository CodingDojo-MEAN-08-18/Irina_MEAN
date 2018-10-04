import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Author } from '../../models/author';
import { AuthorService } from '../../services';


@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[];

  selectedAuthor: Author;

  constructor(private _authorService: AuthorService) { }


  ngOnInit() {
  	this._authorService.getAuthors()
  		.subscribe(authors => {
  			this.authors = authors;
  		});
  }


  // onSelect(author){
  //   console.log('onSelect', author);

  //   this.selectedAuthor = this.selectedAuthor === author ? null : author;
  // }


  onCreate(author: Author){
  	console.log('onCreate', author);

    this._authorService.createAuthor(author)
      .subscribe(createdAuthor => {
        //this.authors.push(createdAuthor);
        this.authors = [...this.authors, createdAuthor];
      });
  }


  onRemove(author: Author) {
    console.log('onRemove', author);

    this._authorService.removeAuthor(author._id)
      .subscribe(removedAuthor => {
        console.log('removed:', removedAuthor);
        this.authors = this.authors.filter(r => r._id !== removedAuthor._id);
      });
  }


  onEvent(event: Event) {
    console.log('onEvent');
    event.stopPropagation();
  }
}