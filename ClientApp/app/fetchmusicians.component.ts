import { Component, Inject, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { MusicianService } from './app.service'
import { concat } from 'rxjs';

@Component({
    selector: 'musicians',
    templateUrl: './fetchmusicians.component.html'
})

export class FetchEmployeeComponent implements OnInit {
    public musList: MusicianData[];
    public trkList: TrackData[];

    constructor(public http: Http, private _service: MusicianService) {

    }

    getMusicians(): void {
        this._service.getMusiciansList().then(
            data => this.musList = data
        )
    }

    getTracks(): void {
        this._service.getTracksList().then(
            data => this.trkList = data
        )
    }

    markAsListened(id: number): void {
        var track = this.trkList.find(a => a.id == id);
        if (track.isListented == false) {
            track.isListented = true;
            this._service.setListened(track);
        }
    }

    markAsFavorite(id: number): void {
        var track = this.trkList.find(a => a.id == id);
        track.isFavorite = !track.isFavorite;
        this._service.setFavorite(track);
        //TODO: should I return actual db value and use it as a new value?
    }

    like(id: number): void {
        var track = this.trkList.find(a => a.id == id);
        track.rating = 1;
        this._service.setLike(track);
    }

    dislike(id: number): void {
        var track = this.trkList.find(a => a.id == id);
        track.rating = -1;
        this._service.setLike(track);
    }

    ngOnInit() {
        this.getMusicians();
        this.getTracks();
    }
}

export interface MusicianData {
    id: number;
    name: string;
    age: number;
    careerStartYear: number;
    albums: AlbumData[];
}

export interface AlbumData {
    id: number;
    name: string;
    releaseDate: number;
    tracks: TrackData[];
    musician: MusicianData;
}

export interface TrackData {
    id: number;
    name: string;
    duration: string;
    isFavorite: boolean;
    isListented: boolean;
    rating: number;
    album: AlbumData;
}