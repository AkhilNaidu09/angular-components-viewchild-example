import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>Parent Component</h1>
  
    <input type="text" placeholder='Parent Text' [(ngModel)]=parentModel>
  `
})
export class ParentComponent  {
  parentModel:any='';
  
}
