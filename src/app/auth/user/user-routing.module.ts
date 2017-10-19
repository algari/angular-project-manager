import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from 'app/auth/user/new-user/new-user.component';
import { AuthGuard } from 'app/common/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: NewUserComponent, pathMatch: 'full', canActivate: [ AuthGuard ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class UserRoutingModule { }
