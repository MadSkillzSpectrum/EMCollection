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
import { MusicianData } from './fetchmusicians.component';

@Injectable()
export class MusicianService {
    myAppUrl: string = "";

    constructor(private _http: Http) {
        this.myAppUrl = "http://localhost:49680/";
    }

    public getMusiciansList(): Promise<MusicianData[]> {
        return this._http.get(this.myAppUrl + 'api/getMusicians').toPromise().then(response => { return response.json() });
            //.pipe(map((response: MusicianData) => response()))
            //.pipe(catchError(this.errorHandler));
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    } 
}
