import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { SharedModule } from '../../shared/shared.module';
import { StatusSellerComponent } from './status-seller/status-seller.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { TrackingInfoComponent } from './tracking-info/tracking-info.component';

@NgModule({
    imports: [CommonModule, SharedModule, DashboardRoutingModule],
    declarations: 
    [
     DashboardComponent, 
     SidebarComponent,
     DashboardDetailComponent,
     CreateEmployeeComponent, 
     StatusSellerComponent,
     ViewEmployeeComponent, 
     TrackingInfoComponent]
})
export class DashboardModule {}
