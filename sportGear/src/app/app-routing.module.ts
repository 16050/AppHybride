import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sport-create',
    loadChildren: () => import('./sport-create/sport-create.module').then( m => m.SportCreatePageModule)
  },
  {
    path: 'sport-list',
    loadChildren: () => import('./sport-list/sport-list.module').then( m => m.SportListPageModule)
  },
  {
    path: 'sport',
    loadChildren: () => import('./sport/sport.module').then( m => m.SportPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'category-create',
    loadChildren: () => import('./category-create/category-create.module').then( m => m.CategoryCreatePageModule)
  },
  {
    path: 'category-list',
    loadChildren: () => import('./category-list/category-list.module').then( m => m.CategoryListPageModule)
  },
  {
    path: 'gear',
    loadChildren: () => import('./gear/gear.module').then( m => m.GearPageModule)
  },
  {
    path: 'gear-list',
    loadChildren: () => import('./gear-list/gear-list.module').then( m => m.GearListPageModule)
  },
  {
    path: 'gear-create',
    loadChildren: () => import('./gear-create/gear-create.module').then( m => m.GearCreatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
