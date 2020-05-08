import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notice-list',
    pathMatch: 'full'
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
    path: 'category-edit',
    loadChildren: () => import('./pages/category-edit/category-edit.module').then( m => m.CategoryEditPageModule)
  },
  {
    path: 'category-edit/:id',
    loadChildren: './pages/category-edit/category-edit.module#CategoryEditPageModule'
  },
  {
    path: 'notice-create',
    loadChildren: () => import('./pages/notice-create/notice-create.module').then( m => m.NoticeCreatePageModule)
  },
  {
    path: 'notice-detail',
    loadChildren: () => import('./pages/notice-detail/notice-detail.module').then( m => m.NoticeDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
