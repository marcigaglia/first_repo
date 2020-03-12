import { Component, OnInit, OnDestroy } from '@angular/core';
import {Project} from '../../models/Project';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ControlContainer, NgForm } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'ngptt-project',
  templateUrl: './project-container.component.html',
  styles: [
    `
    .form-control.ng-invalid.ng-touched{
      border: 1px solid red;
    }
    `
  ]
})
export class ProjectContainerComponent implements OnInit {
  
  projectSubscription: Subscription;
  projects: Project[] = [];
  selectedProject: Project;
  submittedProject: Project;
  searchedProject: Project;

constructor(
  public projectService: ProjectService,
  private router: Router
  ){} //service injection o inizializzazione specifiche di classe e non del componente

  ngOnInit(): void {
    //this.projects = this.projectService.getAll();
    /*this.projectSubscription = this.projectService.getAll()
    .pipe(
      skip(1) //skippa il primo valore emesso
    )
    
    .subscribe(
      (projects) => this.projects = projects
    )*/
  }

  selectProject(project: Project ) {
    //this.selectedProject = this.projectService.get(project.id);
    this.router.navigate(['/projects', 'detail', project.id]);
  }

  searchProject(project: Project ) {
    this.searchedProject = project;
  }

  addNewProject(project: Project) {
    this.projectService.add(project);
  }

  //per evitare memory leak
  //ngOnDestroy(): void {
  //  this.projectSubscription.unsubscribe();
  // }

}
