import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [CommonModule, SharedModule, SignupRoutingModule],
    declarations: [SignupComponent]
})
export class SignupModule {}
