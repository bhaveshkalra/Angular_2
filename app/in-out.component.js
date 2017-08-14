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
var core_2 = require('@angular/core');
var InOutComponent = (function () {
    function InOutComponent() {
        this.apply = true;
        this.childevent = new core_2.EventEmitter();
    }
    InOutComponent.prototype.onChange = function (value) {
        this.childevent.emit(value);
    };
    InOutComponent = __decorate([
        core_1.Component({
            selector: 'my-in-out',
            template: "<h1>Child component</h1>\n              <label>enter child2 component value</label>\n              <input type=\"text\" #childtxt (keyup)=\"onChange(childtxt.value)\">\n              <p>The parent component value is:</p>\n              <p [class.myclass]=\"apply\">{{parentData}}</p>",
            //whenever we accept the property as input from another component we use inputs configuration
            inputs: ['parentData'],
            styles: [".myclass{\n    color:red;\n    font:bold 30px tahoma;\n}\n\n"],
            outputs: ['childevent']
        }), 
        __metadata('design:paramtypes', [])
    ], InOutComponent);
    return InOutComponent;
}());
exports.InOutComponent = InOutComponent;
//# sourceMappingURL=in-out.component.js.map