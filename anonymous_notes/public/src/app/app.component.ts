import { Component,OnInit, Input } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  quote ={
    text:''
  }
  quotes = [];
  title = 'app';
  constructor(private _quoteService: QuoteService) {
    this._quoteService.getQuotes();
  }
  onSubmit(){
    this._quoteService.addQuote(this.quote);
    console.log(this.quotes)
    console.log('initializing');
    this._quoteService.getQuotes().subscribe(
      (response) => {
        console.log(response.json())
        this.quotes = response.json().reverse();
      },
      (err) => {console.log(err);}
    );
    console.log(this.quotes);
    this.quote ={
      text:''
    }
  }
  ngOnInit(){
    console.log('initializing');
    this._quoteService.getQuotes().subscribe(
      (response) => {
        console.log(response.json())
        this.quotes = response.json().reverse();
      },
      (err) => {console.log(err);}
    );
    console.log(this.quotes);
    }
}
