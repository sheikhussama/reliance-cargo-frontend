import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { StatusSellerComponent } from './status-seller/status-seller.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { TrackingInfoComponent } from './tracking-info/tracking-info.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            { path: '', component: DashboardDetailComponent },
            { path: 'createmployee', component: CreateEmployeeComponent },
            { path: 'sellerstatus', component: StatusSellerComponent },
            { path: 'viewEmployee', component: ViewEmployeeComponent },
            { path: 'track-Order', component: TrackingInfoComponent },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
