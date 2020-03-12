import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/Project';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectService } from '../project.service';
import { switchMap } from 'rxjs/Operators';

@Component({
  selector: 'ngptt-project-detail',
  templateUrl: './project-detail.component.html',
  styles: []
})
export class ProjectDetailComponent implements OnInit {

@Input() project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
    ) { }

  ngOnInit(): void {
    /* 
    Entrambe le soluzioni funzionano correttamente
    
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.projectService.get(+params.get('id')).subscribe((project) => {
          this.project = project;
        });
      }
    ); */

    //console.log(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.projectService.get(+params.get('id')))
    ).subscribe((project) => this.project = project)
  }

}
