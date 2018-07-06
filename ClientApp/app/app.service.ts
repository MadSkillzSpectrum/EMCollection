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
import { MusicianData, TrackData } from './fetchmusicians.component';

@Injectable()
export class MusicianService {
    myAppUrl: string = "http://localhost:49680/";

    constructor(private _http: Http) {
        //this.myAppUrl = "";
    }

    public getMusiciansList(): Promise<MusicianData[]> {
        return this._http.get(this.myAppUrl + 'api/getMusicians').toPromise().then(response => { return response.json() });
    }

    public getTracksList(): Promise<TrackData[]> {
        return this._http.get(this.myAppUrl + 'api/getTracks').toPromise().then(response => { return response.json() });
    }

    public setLike(id:number, like:number): Promise<number> {
        return this._http.post(this.myAppUrl + 'api/like/', id ).toPromise().then(response => { return response.json() });
    }

    public setListened(id: number): Promise<number> {
        return this._http.post(this.myAppUrl + 'api/listen/', id).toPromise().then(response => { return response.json() });
    }

    public setFavorite(id: number): Promise<number> {
        return this._http.post(this.myAppUrl + 'api/favorite/', id).toPromise().then(response => { return response.json() });
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    } 
}
