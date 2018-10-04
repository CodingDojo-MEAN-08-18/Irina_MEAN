import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Author } from '../../models/author';
import { map, switchMap } from 'rxjs/operators';

import { AuthorService } from '../../services';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  @Input()
  author: Author;

  constructor(
    private readonly _authorService: AuthorService,
//    private readonly _router: Router,
    private readonly _route: ActivatedRoute) 
  { }

  ngOnInit() {
  	// this._route.paramMap.subscribe(params => {
  	// 	console.log(params);
  	// 	const id = params.get('author_id');

  	// 	this._authorService.getAuthor(id)
  	// 		.subscribe(author => {
  	// 			this.author = author;
  	// 		})
  	// });

  	this._route.paramMap
  		.pipe(
  			map(params => params.get('author_id')),
  			switchMap(id => this._authorService.getAuthor(id))
  		)
  		.subscribe(author => this.author = author);
  }


  onSubmit(event: Event, form: NgForm){
  	event.preventDefault();

  	console.log('onSubmit', this.author);

  	//this.authors.push(this.author);
  	//this.createAuthor.emit(this.author);
    this._authorService.updateAuthor(this.author.id, this.author)
      .subscribe(author => {
        this._router.navigateByUrl('/');
      },
      (error) => {
        this.error = error.json().message;
      });

	//  	console.log("collected authors", this.author);

  	form.reset();
  }
}