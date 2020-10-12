import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { MylinksComponent } from './mylinks/mylinks.component';

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'myLinks', component: MylinksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
