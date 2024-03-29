import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
    imports: [CommonModule, LayoutRoutingModule, NgbDropdownModule],
    declarations: [LayoutComponent, HeaderComponent]
})
export class LayoutModule {}
