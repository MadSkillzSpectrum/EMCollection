var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/toPromise';
import 'rxjs-compat/add/operator/catch';
import 'rxjs-compat/add/observable/throw';
import { Observable } from 'rxjs-compat';
let MusicianService = class MusicianService {
    constructor(_http) {
        this._http = _http;
        this.myAppUrl = "http://localhost:49680/";
        //this.myAppUrl = "";
    }
    getMusiciansList() {
        return this._http.get(this.myAppUrl + 'api/getMusicians').toPromise().then(response => { return response.json(); });
    }
    getTracksList() {
        return this._http.get(this.myAppUrl + 'api/getTracks').toPromise().then(response => { return response.json(); });
    }
    setLike(id, like) {
        return this._http.post(this.myAppUrl + 'api/like/', id).toPromise().then(response => { return response.json(); });
    }
    setListened(id) {
        return this._http.post(this.myAppUrl + 'api/listen/', id).toPromise().then(response => { return response.json(); });
    }
    setFavorite(id) {
        return this._http.post(this.myAppUrl + 'api/favorite/', id).toPromise().then(response => { return response.json(); });
    }
    errorHandler(error) {
        console.log(error);
        return Observable.throw(error);
    }
};
MusicianService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], MusicianService);
export { MusicianService };
//# sourceMappingURL=app.service.js.map