import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'ngptt-project-search',
  templateUrl: './project-search.component.html',
  styles: []
})
export class ProjectSearchComponent implements OnInit {

  @Output() searching = new EventEmitter<any>();
  @ViewChild('filterName') name: ElementRef;//tipologia di oggetto dell'elemento nativo della referenza (input element del DOM)
  @ViewChild('filterPriority') priority: ElementRef;
  @ViewChild('filterDone') done: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.searching.emit({
      name: this.name.nativeElement.value,
      priority: this.priority.nativeElement.value,
      done: this.done.nativeElement.value,
    });
  }

}
