import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
Add routes

Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.

A typical Angular Route has two properties:

    path: a string that matches the URL in the browser address bar.
    component: the component that the router should create when navigating to this route.

You intend to navigate to the HeroesComponent when the URL is something like localhost:4200/heroes.

Import the HeroesComponent so you can reference it in a Route. Then define an array of routes with a single route to that component.
 */
