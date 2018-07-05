import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FetchEmployeeComponent } from './fetchmusicians.component';
import { MusicianService } from './app.service';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, FetchEmployeeComponent],
    bootstrap: [AppComponent],
    providers: [MusicianService]
})
export class AppModule { }