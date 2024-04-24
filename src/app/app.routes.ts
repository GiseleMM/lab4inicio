import { Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';

export const routes: Routes = [
    {
        path: "bienvenida",
        loadComponent: () => import('./componentes/bienvenida/bienvenida.component').then(m => m.BienvenidaComponent)

    },
    {
        path: "bienvenido",
        redirectTo: 'bienvenida'
    },
    {
        path: "login",
        loadComponent: () => import('./componentes/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'aboutme',
        loadComponent: () => import('./componentes/aboutme/aboutme.component').then(a => a.AboutmeComponent)
    },
    {
        path: "error",
        loadComponent: () => import('./componentes/error/error.component').then(m => m.ErrorComponent)
    },
    {
        path: "**",
        redirectTo: 'error'

    }

];
