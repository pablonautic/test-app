import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooComponent } from "src/app/foo/foo.component";
import { BarComponent } from "src/app/bar/bar.component";

const routes: Routes = [
  { path: '', component: FooComponent },
  { path: 'bar', component: BarComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
