var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { MusicianService } from './app.service';
let FetchEmployeeComponent = class FetchEmployeeComponent {
    constructor(http, _service) {
        this.http = http;
        this._service = _service;
    }
    getMusicians() {
        this._service.getMusiciansList().then(data => this.musList = data);
    }
    getTracks() {
        this._service.getTracksList().then(data => this.trkList = data);
    }
    markAsListened(id) {
        this._service.setListened(id);
        this.trkList.find(a => a.id == id).isListented = true;
    }
    markAsFavorite(id) {
        this._service.setFavorite(id);
        this.trkList.find(a => a.id == id).isFavorite = true;
    }
    like(id) {
        this._service.setLike(id, 1);
        this.trkList.find(a => a.id == id).rating = 1;
    }
    dislike(id) {
        this._service.setLike(id, -1);
        this.trkList.find(a => a.id == id).rating = -1;
    }
    ngOnInit() {
        this.getMusicians();
        this.getTracks();
    }
};
FetchEmployeeComponent = __decorate([
    Component({
        selector: 'musicians',
        templateUrl: './fetchmusicians.component.html'
    }),
    __metadata("design:paramtypes", [Http, MusicianService])
], FetchEmployeeComponent);
export { FetchEmployeeComponent };
//# sourceMappingURL=fetchmusicians.component.js.map