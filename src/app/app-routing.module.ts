import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./pages/about/about.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {AgoniaComponent} from "./pages/blog/agonia/agonia.component";
import {AngelComponent} from "./pages/blog/angel/angel.component";
import {TiendaComponent} from "./pages/tienda/tienda.component";
const routes: Routes = [
  {path: '', component: BlogComponent},
  {path: 'acerca-de', component: AboutComponent},
  {path: 'un-angel-en-la-tierra',component:AngelComponent},
  {path: 'agonia-melancolica', component: AgoniaComponent},
  {path: 'libros', component: TiendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
