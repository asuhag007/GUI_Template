import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Variable } from './mock-data';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ApiserviceService {
  headers: any;
  options: any;
  constructor(public http: Http) {
   this.headers = new Headers({
            'Content-Type': 'application/json'
        });
        this.options = new RequestOptions({
            headers: this.headers
        });
  }
   saveTemp(body: any): Observable <any> {
        return this.http.post('http://localhost:8080/' + 'email', body, this.options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    // getVars(): Observable <any> {
    //     return this.http.get('http://localhost:8080/' + 'emailVar', this.options)
    //         .map((res: Response) => res.json())
    //         .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    // }
    getVars(): Promise < any[] > {
        return Promise.resolve(Variable);
    }
}
