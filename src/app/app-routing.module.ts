import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './core/guards/user.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./features/home/home.module').then(m =>m.HomeModule)
  },
  {
    path: 'ingredients', loadChildren: () => import('./features/ingredients/ingredients.module').then(m => m.IngredientsModule),
    canActivate: [UserGuard]
  },
  {
    path: 'recipes', loadChildren: () => import('./features/recipes/recipes.module').then(m => m.RecipesModule),
    canActivate: [UserGuard]
  },
  {
    path: 'extras', loadChildren: () => import('./features/extras/extras.module').then(m => m.ExtrasModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
