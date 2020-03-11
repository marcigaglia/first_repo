import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/Project';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ControlContainer, NgForm } from '@angular/forms';
import { ProjectService } from '../project.service';
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
  
  projects: Project[] = [];
  selectedProject: Project;
  submittedProject: Project;
  searchedProject: Project;

constructor(private projectService: ProjectService){}//service injection o inizializzazione specifiche di classe e non del componente

  ngOnInit(): void {
    //this.projects = this.projectService.getAll();
    this.projectService.getAll().subscribe(
      (projects) => this.projects = projects
    )
  }

  selectProject(project: Project ) {
    this.selectedProject = this.projectService.get(project.id);
  }

  searchProject(project: Project ) {
    this.searchedProject = project;
  }

  addNewProject(project: Project) {
    this.projectService.add(project);
  }

}
