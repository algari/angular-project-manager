import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from 'app/auth/user/new-user/new-user.component';
import { UserRoutingModule } from 'app/auth/user/user-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NewUserComponent]
})
export class UserModule { }
