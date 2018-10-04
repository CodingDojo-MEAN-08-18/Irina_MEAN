import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

import { AUTHORS } from '../data/author-data'
import { Author } from '../models/author';


@Injectable()
export class AuthorService {
//  private readonly _base = 'http://5bb29c3d77063c0014a7d25b.mockapi.io/authors';
  private readonly _base = '/api/authors';


  constructor(private _http: HttpClient) { }


  getAuthors(): Observable<Author[]> {
    return this._http.get<Author[]>(this._base);
  }


  createAuthor(author: Author): Observable<Author> {
  	return this._http.post<Author>(this._base, author);

  }

  updateAuthor(id:string, author: Author): Observable<Author> {
  	return this._http.put<Author>(`${this._base}/${id}`, author);

  }


  removeAuthor(id: string): Observable<Author> {
  	return this._http.delete<Author>(`${this._base}/${id}`);
  }

  getAuthor(id: string): Observable<Author> {
  	return this._http.get<Author>(`${this._base}/${id}`);
  }
}
