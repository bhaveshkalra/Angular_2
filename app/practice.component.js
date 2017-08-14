"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PracticeComponent = (function () {
    function PracticeComponent() {
        this.about = "I am very cool person  I am currently \n                studying in Lnm Intitute of Information\n                technology";
        this.applyclass = true;
        this.c1 = true;
        this.c2 = true;
        this.webskills = ['HTML', 'CSS', 'JS', 'JQUERY', 'BOOTSTRAP'];
        this.hobbies = ['badminton', 'pc-gaming', 'singing', 'listening-music', 'bakchodi'];
    }
    PracticeComponent = __decorate([
        core_1.Component({
            selector: 'my-name',
            template: "<div>\n                <input type=\"text\" [(ngModel)]=\"fname\">\n                <input type=\"text\" [(ngModel)]=\"lname\">\n            </div>\n                <h2> <b> My name is  {{fname}} {{lname}} </b> <h2>\n                <p>{{about}}</p>\n                <div [class.myclass]=\"applyclass\">My web Skills  are:\n                <ul [class.listclass]=\"applyclass\"><li *ngFor=\"let skill of webskills\">{{skill}}</li></ul>\n                my hobbies are:\n                <ul [ngClass]=\"{listclass:c1,list2:c2}\"><li   *ngFor=\"let hobby of hobbies\">{{hobby}}</li></ul>\n               \n                </div>",
            styles: ["p{\n        color:red;\n        font-size:25px;\n    }\n    .myclass{\n        color:blue;\n        font:bold 30px ariel; \n    }\n    .listclass{\n        list-style-type:none;\n        color:green;\n        font-size:20px;\n    }\n    .listclass li{\n       display:inline;\n       padding:5px;\n     }\n    .list2{\n        background-color:yellow;\n        text-transform:uppercase;\n        padding-right:10px;\n      \n    }"],
        }), 
        __metadata('design:paramtypes', [])
    ], PracticeComponent);
    return PracticeComponent;
}());
exports.PracticeComponent = PracticeComponent;
//# sourceMappingURL=practice.component.js.map