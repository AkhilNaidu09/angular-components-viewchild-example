import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h1>Child Component</h1>
    <input type="text" placeholder='Child Text' [(ngModel)]='childModel'>
  `
})
export class ChildComponent  {
  visible = true;
  childModel:any='';
}
