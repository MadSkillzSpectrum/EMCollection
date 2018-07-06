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
        var track = this.trkList.find(a => a.id == id);
        if (track.isListented == false) {
            track.isListented = true;
            this._service.setListened(track);
        }
    }
    markAsFavorite(id) {
        var track = this.trkList.find(a => a.id == id);
        track.isFavorite = !track.isFavorite;
        this._service.setFavorite(track);
        //TODO: should I return actual db value and use it as a new value?
    }
    like(id) {
        var track = this.trkList.find(a => a.id == id);
        track.rating = 1;
        this._service.setLike(track);
    }
    dislike(id) {
        var track = this.trkList.find(a => a.id == id);
        track.rating = -1;
        this._service.setLike(track);
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