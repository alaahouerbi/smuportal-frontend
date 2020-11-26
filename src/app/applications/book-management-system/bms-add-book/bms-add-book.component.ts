import { Component, OnInit } from '@angular/core';
import { FormBuilder,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { BmsService } from '@app/shared';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-bms-add-book',
  templateUrl: './bms-add-book.component.html',
  styleUrls: ['./bms-add-book.component.css']
})
export class BmsAddBookComponent implements OnInit {
  onSubmit(book) {
    this.bookForm.reset();
    console.warn("Book Data:", book);
    this.bmsService.addBook(book);
    this.bookAdded.next(true);
  }
  bookForm;
  bookAdded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private formBuilder: FormBuilder, private bmsService: BmsService,
   private router: Router) {
    this.bookForm = this.formBuilder.group({
      title: "",
      author: "",
      isbn: 0
    })
  }
  goBack() {
    this.router.navigate(["/apps/bms"])
  }
  ngOnInit() {
  }

}
