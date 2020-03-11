import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../../models/Project';

@Component({
  selector: 'ngptt-project-form',
  templateUrl:'./project-form.component.html',
  styles: []
})
export class ProjectFormComponent implements OnInit {

  constructor() { }

@Output() submitted = new EventEmitter<Project>();

  ngOnInit(): void {
  }


  submitProjectForm(form: NgForm){
    console.log("valore emesso dal figlio",form.value);
    this.submitted.emit({...form.value});
    
  }
  
}
