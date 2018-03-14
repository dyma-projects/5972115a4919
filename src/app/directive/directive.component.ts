import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
    public nom: string = '';
    public status: boolean = true;
    public texts: Array<string>;

    changeStatus(event: Event): void {
        this.status = !this.status;
    }

    constructor() { }

    ngOnInit() {
        this.texts = ['un', 'deux', 'trois'];
    }

}
