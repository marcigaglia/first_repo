import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from '../../models/Project';


@Component({
  selector: 'ngptt-project-list',
  templateUrl: './project-list.component.html',
  styles: []
})
export class ProjectListComponent implements OnInit {

@Input() projects: Project[]=[];
@Output() selected = new EventEmitter<Project>();

  constructor() { }

  ngOnInit(): void {
  }

  select(project: Project){
    this.selected.emit(project);
  }

}
