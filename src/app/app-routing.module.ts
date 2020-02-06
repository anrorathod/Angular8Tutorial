import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiGetDataComponent } from './Pages/api-get-data/api-get-data.component';


const routes: Routes = [
  { path : "apigetdata", component : ApiGetDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
