import { Component } from '@angular/core';

@Component({
    selector:'my-name',
    template:`<h2> <b> My name is Bhavesh Kalra </b> <h2>
                <p>I am very cool person  I am currently 
                studying in Lnm Intitute of Information
                technology</p>`,
    styles: [`p{
        color:red;
        font-size:25px;
    }`]
})

export class NameComponent { }