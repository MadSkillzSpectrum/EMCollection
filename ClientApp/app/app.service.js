var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
var MusicianService = /** @class */ (function () {
    function MusicianService(_http, baseUrl) {
        this._http = _http;
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    MusicianService.prototype.getCityList = function () {
        return this._http.get(this.myAppUrl + 'api/getMusicians').map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    MusicianService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable.throw(error);
    };
    MusicianService = __decorate([
        Injectable(),
        __param(1, Inject('BASE_URL')),
        __metadata("design:paramtypes", [Http, String])
    ], MusicianService);
    return MusicianService;
}());
export { MusicianService };
//# sourceMappingURL=app.service.js.map