import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TreeviewModule } from 'ngx-treeview';
import { FetchEmployeeComponent } from './fetchmusicians.component';

@NgModule({
    imports: [BrowserModule, FormsModule, TreeviewModule.forRoot(), FetchEmployeeComponent ],
    declarations: [AppComponent, FetchEmployeeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }