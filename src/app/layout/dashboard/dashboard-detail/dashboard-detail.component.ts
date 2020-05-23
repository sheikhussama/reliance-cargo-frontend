import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../core/services/manager-dashboard.services';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.css']
})
export class DashboardDetailComponent implements OnInit {

  dashBoardDetail: any;

    constructor(private managerService: ManagerService) {
    }

    ngOnInit() {
        this.getDashboard();
    }

    getDashboard() {
        this.managerService.getDashboardDetail().subscribe(response => {
            this.dashBoardDetail = response;
            console.log(this.dashBoardDetail);
        })
    }
}