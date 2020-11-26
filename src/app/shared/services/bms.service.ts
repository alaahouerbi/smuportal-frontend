import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, of } from 'rxjs';
import {Book} from '../models/book.model'

@Injectable({
  providedIn: 'root'
})
export class BmsService {
  listOfBooks: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);


  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>("http://localhost:3000/api/user/getBooks");
  }
  addBook(book: Book): void {
    this.httpClient.post<any>("http://localhost:3000/api/user/addBook", book)
      .subscribe({
        next: (data: any) => {
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
}
