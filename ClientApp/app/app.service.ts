import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { Router } from '@angular/router';
import { Observable } from 'rxjs'; 

@Injectable()
export class MusicianService {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    
    public getMusiciansList() {
        return this._http.get(this.myAppUrl + 'api/getMusicians').map(res => res.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    } 
}
