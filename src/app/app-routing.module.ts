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
  {
    path: 'doar-candidato',
    loadChildren: () => import('./pages/doar-candidato/doar-candidato.module').then( m => m.DoarCandidatoPageModule)
  },
  {
    path: 'detalhe',
    loadChildren: () => import('./pages/detalhe/detalhe.module').then( m => m.DetalhePageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
