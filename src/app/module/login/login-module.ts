import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Signin } from './signin/signin';
import { Signup } from './signup/signup';

const routes: Routes = [
  { path: "", component: Signin },
  { path: "signin", component: Signin },
  { path: "signup", component: Signup }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
