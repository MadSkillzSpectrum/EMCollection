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
        this._service.setListened(id)
        this.trkList.find(a => a.id == id).isListented = true;
    }

    markAsFavorite(id: number): void {
        this._service.setFavorite(id);
        this.trkList.find(a => a.id == id).isFavorite = true;
    }

    like(id:number): void {
        this._service.setLike(id,1);
        this.trkList.find(a => a.id == id).rating = 1;
    }

    dislike(id: number): void {
        this._service.setLike(id, -1);
        this.trkList.find(a => a.id == id).rating = -1;
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