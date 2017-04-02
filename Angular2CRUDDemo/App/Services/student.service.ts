﻿import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class StudentService {
    private _baseUrl: string = "http://localhost:1912/api/Students";
    constructor(private _http: Http) {

    }
    getStudents(): Observable<any[]> {
        return this._http.get(this._baseUrl).map(this.extractData).catch(this.handleError);
    }
    addStudent(student: any): Observable<any> {
        return this._http.post(this._baseUrl, student).map(this.extractData).catch(this.handleError);
    }
    deleteStudent(id: number): Observable<any> {
        return this._http.delete(this._baseUrl + '/' + id).map(this.extractData).catch(this.handleError);
    }
    updateStudent(student: any): Observable<any> {
        return this._http.put(this._baseUrl + '/' + student.Id, student).map(this.extractData).catch(this.handleError);
    }
    extractData(res: Response) {
        let response = res.json();
        let body = response;
        return body || {};
    }
    handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        let errorResponse = error.json();
        if (errorResponse.StatusCode == 401) {
            location.reload();
        }
        return Observable.throw(errMsg);
    }
}