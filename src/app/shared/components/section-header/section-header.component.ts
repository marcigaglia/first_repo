import { Component, OnInit, Input } from '@angular/core';

interface Button {
  label: string,
  link: string,
  type: 'btn-link' | 'btn-primary';
}

@Component({
  selector: 'ngptt-section-header',
  templateUrl: './section-header.component.html',
  styles: []
})
export class SectionHeaderComponent implements OnInit {
 
  _button: Button={label: 'Bottone di default', link: '#', type: 'btn-link'};
  
  @Input() title='';
  @Input() set button(value: Button) {
    this._button =  { ...this._button, ...value};
  }

  constructor() { }

  ngOnInit(): void {
  }

}
