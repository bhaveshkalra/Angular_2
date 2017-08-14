import { Component } from '@angular/core';

@Component({
    selector:'my-name',
    template:`<div>
                <input type="text" [(ngModel)]="fname">
                <input type="text" [(ngModel)]="lname">
            </div>
                <h2> <b> My name is  {{fname}} {{lname}} </b> <h2>
                <p>{{about}}</p>
                <div [class.myclass]="applyclass">My web Skills  are:
                <ul [class.listclass]="applyclass"><li *ngFor="let skill of webskills">{{skill}}</li></ul>
                my hobbies are:
                <ul [ngClass]="{listclass:c1,list2:c2}"><li   *ngFor="let hobby of hobbies">{{hobby}}</li></ul>
               
                </div>`,
    styles: [`p{
        color:red;
        font-size:25px;
    }
    .myclass{
        color:blue;
        font:bold 30px ariel; 
    }
    .listclass{
        list-style-type:none;
        color:green;
        font-size:20px;
    }
    .listclass li{
       display:inline;
       padding:5px;
     }
    .list2{
        background-color:yellow;
        text-transform:uppercase;
        padding-right:10px;
      
    }`], 
    
})

export class PracticeComponent {
    public about=`I am very cool person  I am currently 
                studying in Lnm Intitute of Information
                technology`;
    public applyclass= true;
    public fname;
    public lname;
    public c1=true;
    public c2=true;
    public webskills=['HTML','CSS','JS','JQUERY','BOOTSTRAP'];
    public hobbies=['badminton','pc-gaming','singing','listening-music','bakchodi'];
 }