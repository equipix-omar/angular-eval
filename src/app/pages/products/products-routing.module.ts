import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsListComponent} from "./products-list/products-list.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {
    path: "",
    component: ProductsListComponent
  },
  {
    path: ":slug",
    component: DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
