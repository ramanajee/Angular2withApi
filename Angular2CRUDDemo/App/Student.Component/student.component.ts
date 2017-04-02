import { Component } from "@angular/core";
import { StudentService } from '../services/student.service';
@Component({
    selector: 'of-car',
    templateUrl: './app/Student.component/student.component.html',
    styleUrls: ['./app/Student.Component/student.Component.css'],
    providers: [StudentService]

})
export class CarsComponent {
    private students: any[];
    private biketitles: any[];
    private student: any = {
        Id: '',
        Name: '',
        Class: '',
        English: '',
        Hindi: '',
        Maths: '',
        Marks: '',
        Result: ''
    }
    constructor(private _studentService: StudentService) {

    }
    resetStudent() {
        this.student = {
            Id:'',
            Name: '',
            Class: '',
            English: '',
            Hindi: '',
            Maths: '',
            Marks: '',
            Result: ''
        }
    }
    ngOnInit() {
        this.getStudents();
    }
    getStudents() {
        this._studentService.getStudents().subscribe(
            response => this.students = response,
            error => console.error(error),
            () => { console.info(this.students), this.resetStudent() }
        );

    }
    addStudent(student: any) {
        student.Marks = parseInt(student.Hindi) + parseInt(student.Maths) + parseInt(student.English);
        if (student.English > 35 && student.Hindi > 35 && student.Maths > 35) {
            student.Result = "Pass"
        } else {
            student.Result = "Fail";
        }
        student.Id =0;
        this._studentService.addStudent(student).subscribe(
            response => response,
            error => console.error(error),
            () => this.getStudents()
        );
        console.info(student);
    }
    deleteStudent(id: number) {
        this._studentService.deleteStudent(id).subscribe(
            response => response,
            error => console.error(error),
            () => this.getStudents()
        );
    }
    updateStudent(student: any) {
        this._studentService.updateStudent(student).subscribe(
            response => response,
            error => console.error(error),
            () => this.getStudents()
        )
        console.info(student);
    }
    editStudent(student: any) {
        this.student = student;
    }
}
