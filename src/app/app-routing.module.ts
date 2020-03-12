import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectContainerComponent } from './projects/project-container/project-container.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';

const routes: Routes = [
    {path: 'projects/detail/:id', component: ProjectDetailComponent },
    //{path: 'projects/detail', component: ProjectDetailComponent },
    {path: 'projects', component: ProjectContainerComponent  },
    {path: 'home', component: HomeComponent  },
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: '**', redirectTo: '/home'},//tutti i path non riconosciuti (in ordine firstWin) vanno reinoltrati in home
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}