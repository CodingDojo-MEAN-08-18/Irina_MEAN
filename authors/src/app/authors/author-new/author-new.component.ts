import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Author } from '../../models/author';

import { AuthorService } from '../../services';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
  @Output()
  createAuthor = new EventEmitter<Author>();

  author = new Author();
  //authors: Author[] = [];

  constructor(
    private readonly _authorService: AuthorService,
    private readonly _router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm){
  	event.preventDefault();

  	console.log('onSubmit', this.author);

  	//this.authors.push(this.author);
  	//this.createAuthor.emit(this.author);
    this._authorService.createAuthor(this.author)
      .subscribe(author => {
        this.author = new Author();
        form.reset();

        this._router.navigateByUrl('/');
      });

	//  	console.log("collected authors", this.author);

  	form.reset();
  }
}