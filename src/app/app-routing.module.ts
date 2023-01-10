import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./pages/blog/blog.component";
import {AgoniaComponent} from "./pages/blog/agonia/agonia.component";
import {AngelComponent} from "./pages/blog/angel/angel.component";
const routes: Routes = [
  {path: '', component: BlogComponent},
  {path: 'un-angel-en-la-tierra',component:AngelComponent},
  {path: 'agonia-melancolica', component: AgoniaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
