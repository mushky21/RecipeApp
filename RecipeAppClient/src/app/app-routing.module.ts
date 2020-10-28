import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeComponent } from './Components/add-recipe/add-recipe.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addRecipe', component: AddRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
