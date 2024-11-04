import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'main',
    loadComponent:()=>import('../modules/main-layout/main-layout.component').then((c)=>c.MainLayoutComponent),
    children:[
      {
        path:'about',
        loadComponent:()=>import('../modules/about/about.component').then((c)=>c.AboutComponent)
      },
      {
        path:'experience',
        loadComponent:()=>import('../modules/experience/experience.component').then((c)=>c.ExperienceComponent)
      },
      {
        path:'projects',
        loadComponent:()=>import('../modules/projects/projects.component').then((c)=>c.ProjectsComponent)
      },
      {
        path:'contact',
        loadComponent:()=>import('../modules/contact/contact.component').then((c)=>c.ContactComponent)
      },
      {
        path:'',
        redirectTo: 'about',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'about', pathMatch: 'full' }
    ]
  },
  {
    path:'',
    redirectTo:'/main/about',
    pathMatch:'full'
  },
  { path: '**', redirectTo: '/main/about', pathMatch: 'full' }
];
