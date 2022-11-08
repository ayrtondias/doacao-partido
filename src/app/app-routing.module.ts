import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'registrar-doacao',
    loadChildren: () => import('./pages/registrar-doacao/registrar-doacao.module').then( m => m.RegistrarDoacaoPageModule)
  },
  {
    path: 'doacoes-aprovada',
    loadChildren: () => import('./pages/doacoes-aprovada/doacoes-aprovada.module').then( m => m.DoacoesAprovadaPageModule)
  },
  {
    path: 'listar-doacoes',
    loadChildren: () => import('./pages/listar-doacoes/listar-doacoes.module').then( m => m.ListarDoacoesPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./pages/configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
