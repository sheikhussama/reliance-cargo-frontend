import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../shared/modules';

import {SellerRoutingModule } from './seller-routing.module';
import {SellerComponent } from './seller.component';
import { SharedModule } from '../../shared/shared.module';
import { SellerSidebarComponent } from './seller-sidebar/seller-sidebar.component';
import { OrderFormComponent } from './order-form/order-form.component';

@NgModule({
    imports: [CommonModule, SellerRoutingModule, SharedModule, PageHeaderModule],
    declarations: [SellerSidebarComponent,SellerComponent, OrderFormComponent]
})
export class SellerModule {}
