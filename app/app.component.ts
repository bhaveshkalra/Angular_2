import { Component } from '@angular/core';
import { PracticeComponent } from './practice.component';
import { InOutComponent } from './in-out.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World </h1>
             <h2>About me</h2>
              <my-name></my-name>
              <h1>Parent component</h1>
              <label>enter parent app component value</label>
              <input type="text" #parenttxt (keyup)="0">
              <p>The child component value is:</p>
              <p [class.myclass]="apply">{{childData}}</p>
              <my-in-out (childevent)="childData=$event" [parentData]="parenttxt.value"></my-in-out>`,
styles: [`
h2{
  color:green;
  font-size:40px;
  font-weight:bold;
}
.myclass{
    color:red;
    font:bold 30px tahoma;
}`],
  directives: [ [PracticeComponent] , [InOutComponent] ]
})
export class AppComponent { 
  public childData:string;
  public apply=true;
}