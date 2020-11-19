import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Book} from '../models/book.model'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class BmsService {
  addBook(book: Book, bookAdded: BehaviorSubject<boolean>): void {
    this.httpClient.post<any>("http://localhost:3000/api/user/addBook", book).subscribe({
      next: (data: any) => {
        bookAdded.next(true);
       this.addNewBook(book);
       console.log(data);
      },
      error: (data: any) => console.warn(data)

    })
 }

 private addNewBook(book: Book) {
   const books: Book[] = this.listOfBooks.getValue();
   books.push(book);
   this.listOfBooks.next(books);
 }

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>("http://localhost:3000/api/user/getBooks");
  }
}
