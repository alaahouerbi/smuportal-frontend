import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "@app/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListBooksComponent } from './list-books/list-books.component';
import { BmsMainPageComponent } from './bms-main-page/bms-main-page.component';
import { BmsAddBookComponent } from './bms-add-book/bms-add-book.component';

const routes: Routes = [
  {
    path: "",
    component: BmsMainPageComponent
  },
  {
    path: "list",
    component: ListBooksComponent
  },
  {
    path: "add",
    component: BmsAddBookComponent
  }
];
@NgModule({
  declarations: [ListBooksComponent, BmsMainPageComponent, BmsAddBookComponent],
  imports: [
    FormsModule,
     ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class BookManagementSystemModule { }
