import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import * as fromAuthor from './author';

import * as fromServices from './services';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewAddComponent } from './review/review-add/review-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromAuthor.components,
    NavComponent,
    ReviewListComponent,
    ReviewAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [...fromServices.services],
  bootstrap: [AppComponent]
})
export class AppModule { }