import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

    squares: any[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }

}