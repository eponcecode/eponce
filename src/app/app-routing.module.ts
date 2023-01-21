import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./pages/blog/blog.component";
import {PatreonComponent} from "./pages/patreon/patreon.component";
const routes: Routes = [
  {path: '', component: BlogComponent},
  {path: 'patreon', component: PatreonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
