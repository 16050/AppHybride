import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },

  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

  {
    path: 'category-list',
    loadChildren: () => import('./pages/category-list/category-list.module').then( m => m.CategoryListPageModule)
  },
  {
    path: 'notice-list',
    loadChildren: () => import('./pages/notice-list/notice-list.module').then( m => m.NoticeListPageModule)
  },

  {
    path: 'category-create',
    loadChildren: () => import('./pages/category-create/category-create.module').then( m => m.CategoryCreatePageModule)
  },
  {
    path: 'notice-create',
    loadChildren: () => import('./pages/notice-create/notice-create.module').then( m => m.NoticeCreatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
