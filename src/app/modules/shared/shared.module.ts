import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SortingComponent} from "./sorting/sorting.component";
import {MomentPipePipe} from "./pipes/moment-pipe.pipe";
import {LoaderComponent} from "./loader/loader.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SortingComponent,
    MomentPipePipe,
    LoaderComponent,

  ],
  exports:[
    SortingComponent,
    MomentPipePipe,
    LoaderComponent
  ]
})
export class SharedModule { }
