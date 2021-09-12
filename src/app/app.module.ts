import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChildCComponent } from './child-c/child-c.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { HighlightPersonDirective } from './highlight-person.directive';

@NgModule({
  declarations: [AppComponent, ChildCComponent, CreatePersonComponent, HighlightPersonDirective],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
