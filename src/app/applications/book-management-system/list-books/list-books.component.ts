import { Component, OnInit } from '@angular/core';
import {BmsService} from "@app/shared/services"
import { Book } from "@app/shared/models";
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  goToAdd() {
    this.router.navigate(["/apps/bms/add"])
  }

  listOfBooks: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  constructor(private bmsService: BmsService,private router: Router) { }

  ngOnInit() {
    this.bmsService.getBooks().subscribe({
      next: (data: Book[]) => this.listOfBooks.next(data),
      error: (data: any) => console.log(data)

    })
  }

}
