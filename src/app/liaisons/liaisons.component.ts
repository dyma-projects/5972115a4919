import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-liaisons',
    templateUrl: './liaisons.component.html',
    styleUrls: ['./liaisons.component.css']
})
export class LiaisonsComponent implements OnInit {
    displayClick(event: Event):void {
        console.log('clic !');
    }

    constructor() { }

    ngOnInit() {
    }
}
