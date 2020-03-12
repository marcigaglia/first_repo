import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/Operators'

import { Project } from '../models/Project';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    projects: Project[] = [
        {
            id: 1,
            code: 'NHusYJl',
            name: 'Progetto Alpha',
            description: 'Lorem ipsum dolor sit amet.',
            start: new Date(2019, 1, 31),
            end: new Date(2019, 3, 15),
            priority: 'medium',
            done: true,
            tasks: []
        },
        {
            id: 2,
            code: 'SJieYKl',
            name: 'Progetto Beta',
            description: 'Lorem ipsum dolor sit amet.',
            start: new Date(2019, 3, 31),
            end: new Date(2019, 6, 15),
            priority: 'low',
            done: true,
            tasks: []
        },
        {
            id: 3,
            code: 'POjeGBs',
            name: 'Progetto Gamma',
            description: 'Lorem ipsum dolor sit amet.',
            start: new Date(2019, 8, 15),
            priority: 'low',
            done: false,
            tasks: []
        },
    ];

    private projectSubject = new BehaviorSubject<Project[]>([...this.projects]);
    
    //$ finale, notazione standard per gli Observable
    public projects$ = this.projectSubject.asObservable(); //passo solo l'observable per ottenere i valori, senza poter richiamarne i metodi ( es next())

    getAll(){
        return this.projects$;
    }

    add(project: Project){
        this.projects.push({
            id: this.projects.length + 1,
            code: `code_${this.projects.length + 1}`,
            done: false,
            ...project
          });
          this.projectSubject.next([...this.projects]);
    }

    /* get(id: number): Project | null{
        return { ...this.projects.find(project => project.id === id)};
    }*/

    get(id: number){
        return this.projects$.pipe(
            map((projects: Project[]) => {
                return { ...projects.find(project => project.id === id)}
                })
        );
    }
}