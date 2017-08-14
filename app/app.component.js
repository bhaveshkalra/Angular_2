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
var practice_component_1 = require('./practice.component');
var in_out_component_1 = require('./in-out.component');
var AppComponent = (function () {
    function AppComponent() {
        this.apply = true;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Hello World </h1>\n             <h2>About me</h2>\n              <my-name></my-name>\n              <h1>Parent component</h1>\n              <label>enter parent app component value</label>\n              <input type=\"text\" #parenttxt (keyup)=\"0\">\n              <p>The child component value is:</p>\n              <p [class.myclass]=\"apply\">{{childData}}</p>\n              <my-in-out (childevent)=\"childData=$event\" [parentData]=\"parenttxt.value\"></my-in-out>",
            styles: ["\nh2{\n  color:green;\n  font-size:40px;\n  font-weight:bold;\n}\n.myclass{\n    color:red;\n    font:bold 30px tahoma;\n}"],
            directives: [[practice_component_1.PracticeComponent], [in_out_component_1.InOutComponent]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map