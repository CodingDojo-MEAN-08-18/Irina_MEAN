import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class QuoteService {
  
  quotes = [];
  constructor(private _http: Http) {
    this.getQuotes();    
  }
  
  getQuotes(){
    return this._http.get('/quotes');
  }
  sendIt(){
    return this.quotes
  }
  addQuote(theQuote){
    this._http.post('/new', theQuote).subscribe(
      data =>{
        console.log("success!");
      }
    )
  }
}
