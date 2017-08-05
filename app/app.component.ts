import { Component } from '@angular/core';
import { NameComponent } from './name.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello World </h1>
             <h2>About me</h2>
              <my-name></my-name>,`
styles: [`
h2{
  color:green;
  font-size:40px;
  font-weight:bold;
}`]
  directives: [NameComponent] 
})
export class AppComponent { }
