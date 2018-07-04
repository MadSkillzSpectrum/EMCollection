import { Component } from '@angular/core';
import { TreeviewItem, TreeviewConfig} from 'ngx-treeview';
import { MusicianService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    name = '';
    public items: Array<TreeviewItem> = [
    ];

    public config: TreeviewConfig = {
        hasCollapseExpand: false,
        hasAllCheckBox: false,
        maxHeight: 500,
        hasFilter: true,
        hasDivider: false,
        decoupleChildFromParent: false
    };
    ngOnInit() {
        /*this.items = [
            new TreeviewItem({ text: "test", value: 1 }),
            new TreeviewItem({ text: "test2", value: 2 })];*/
        this.items = MusicianService.
    }
}