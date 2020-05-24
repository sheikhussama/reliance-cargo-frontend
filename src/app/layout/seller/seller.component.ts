import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-seller',
    templateUrl: './seller.component.html',
    styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {}

    
    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
