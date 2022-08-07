import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/book';


@Injectable()

export class BookService
{
  private url = "https://sheetdb.io/api/v1/tbh6cra1tzq49";

  httpOptions = {
      Headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient){}

  getBook(){
      return this.http.get(this.url);
  }
}


