import { Component } from '@angular/core';
import {EventEmitter } from '@angular/core';


@Component({
selector:'my-in-out',
template:`<h1>Child component</h1>
              <label>enter child2 component value</label>
              <input type="text" #childtxt (keyup)="onChange(childtxt.value)">
              <p>The parent component value is:</p>
              <p [class.myclass]="apply">{{parentData}}</p>`,
           
 //whenever we accept the property as input from another component we use inputs configuration
inputs:['parentData'],
styles: [`.myclass{
    color:red;
    font:bold 30px tahoma;
}

`],
outputs:['childevent']
})

export class InOutComponent {
public parentData : string;
public apply=true;
childevent = new EventEmitter<string>();

onChange(value:string){
this.childevent.emit(value);
}

}