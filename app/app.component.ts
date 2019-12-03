import { Component,ViewChild } from '@angular/core';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  @ViewChild(ParentComponent) parentDetails: ParentComponent;
    @ViewChild(ChildComponent) childDetails: ChildComponent;
  name = 'Angular 4';

  getChildValue(){
console.log(this.childDetails);
  }

  getParentValue(){
console.log(this.parentDetails);
  }
}
