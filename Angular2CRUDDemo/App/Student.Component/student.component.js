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
var core_1 = require("@angular/core");
var student_service_1 = require("../services/student.service");
var CarsComponent = (function () {
    function CarsComponent(_studentService) {
        this._studentService = _studentService;
        this.student = {
            Id: '',
            Name: '',
            Class: '',
            English: '',
            Hindi: '',
            Maths: '',
            Marks: '',
            Result: ''
        };
    }
    CarsComponent.prototype.resetStudent = function () {
        this.student = {
            Id: '',
            Name: '',
            Class: '',
            English: '',
            Hindi: '',
            Maths: '',
            Marks: '',
            Result: ''
        };
    };
    CarsComponent.prototype.ngOnInit = function () {
        this.getStudents();
    };
    CarsComponent.prototype.getStudents = function () {
        var _this = this;
        this._studentService.getStudents().subscribe(function (response) { return _this.students = response; }, function (error) { return console.error(error); }, function () { console.info(_this.students), _this.resetStudent(); });
    };
    CarsComponent.prototype.addStudent = function (student) {
        var _this = this;
        student.Marks = parseInt(student.Hindi) + parseInt(student.Maths) + parseInt(student.English);
        if (student.English > 35 && student.Hindi > 35 && student.Maths > 35) {
            student.Result = "Pass";
        }
        else {
            student.Result = "Fail";
        }
        student.Id = 0;
        this._studentService.addStudent(student).subscribe(function (response) { return response; }, function (error) { return console.error(error); }, function () { return _this.getStudents(); });
        console.info(student);
    };
    CarsComponent.prototype.deleteStudent = function (id) {
        var _this = this;
        this._studentService.deleteStudent(id).subscribe(function (response) { return response; }, function (error) { return console.error(error); }, function () { return _this.getStudents(); });
    };
    CarsComponent.prototype.updateStudent = function (student) {
        var _this = this;
        this._studentService.updateStudent(student).subscribe(function (response) { return response; }, function (error) { return console.error(error); }, function () { return _this.getStudents(); });
        console.info(student);
    };
    CarsComponent.prototype.editStudent = function (student) {
        this.student = student;
    };
    return CarsComponent;
}());
CarsComponent = __decorate([
    core_1.Component({
        selector: 'of-car',
        templateUrl: './app/Student.component/student.component.html',
        styleUrls: ['./app/Student.Component/student.Component.css'],
        providers: [student_service_1.StudentService]
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], CarsComponent);
exports.CarsComponent = CarsComponent;
//# sourceMappingURL=Student.component.js.map