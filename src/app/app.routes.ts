import { Routes } from '@angular/router';
import { Dashboard } from './page/dashboard/dashboard';

export const routes: Routes = [
    { path: "loginmodule", loadChildren: () => import("./module/login/login-module").then(m =>m.LoginModule) },
    { path: "dashboard", component: Dashboard },
    {
        path: '',
        redirectTo: '/loginmodule',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/loginmodule'
    }
];
