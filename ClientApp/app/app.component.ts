import { Component } from '@angular/core';
import { MusicianService } from './app.service';
import { FetchEmployeeComponent } from './fetchmusicians.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    name = '';
}