import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/toPromise';
import 'rxjs-compat/add/operator/catch';
import 'rxjs-compat/add/observable/throw';
import { Router } from '@angular/router';
import { Observable } from 'rxjs-compat';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class MusicianService {
    myAppUrl: string = "";

    constructor(private _http: Http) {
        this.myAppUrl = "http://localhost:49679/";
    }
    
    public getMusiciansList() {
        return this._http.get(this.myAppUrl + 'api/getMusicians').pipe(map((response: any) => response.json()))
            .pipe(catchError(this.errorHandler));
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    } 
}
