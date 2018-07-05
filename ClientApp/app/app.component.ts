import { Component, ViewEncapsulation } from '@angular/core';
import { MusicianService } from './app.service';
import { FetchEmployeeComponent } from './fetchmusicians.component';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.style.css']
})
export class AppComponent {
    name = '';
}