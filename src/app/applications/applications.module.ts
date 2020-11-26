import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "apps",
    loadChildren: () =>
      import("./logistics-reservation/logistics-reservation.module").then(
        m => m.LogisticsReservationModule
      )
  },
  {
    path: "bms",
    loadChildren: () =>
    import("./book-management-system/book-management-system.module").then(
      m => m.BookManagementSystemModule
    )
  },{
  path: "jobs",
  loadChildren: () =>
  import("./job-offer-appli/job-offer-appli.module").then(m=>m.JobOfferAppliModule)
  }];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsModule {}
