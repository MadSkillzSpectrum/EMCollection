import { Component, Inject, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { MusicianService } from './app.service'

@Component({
    selector: 'musicians',
    templateUrl: './fetchmusicians.component.html'
})

export class FetchEmployeeComponent implements OnInit {
    public musList: MusicianData[];

    constructor(public http: Http, private _service: MusicianService) {

    }

    getMusicians() {
        this._service.getMusiciansList().subscribe(
            data => this.musList = data
        )
    }

    ngOnInit() {
        this.getMusicians();
    }
}

interface MusicianData {
    id: number;
    name: string;
    age: number;
    careerStartYear: number;
    albums: AlbumData[];
}

interface AlbumData {
    id: number;
    name: string;
    releaseDate: number;
    tracks: TrackData[];
}

interface TrackData {
    id: number;
    name: string;
    duration: string;
    isFavorite: boolean;
    isListented: boolean;
    rating: number;
}