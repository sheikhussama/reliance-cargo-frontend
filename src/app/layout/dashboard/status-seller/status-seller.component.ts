import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../core/services/manager-dashboard.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-status-seller',
  templateUrl: './status-seller.component.html',
  styleUrls: ['./status-seller.component.css']
})
export class StatusSellerComponent implements OnInit {

  statuForm: FormGroup
  status: any;

  constructor(private fb: FormBuilder,
   private checkStatusService: ManagerService) { }

  ngOnInit() {
    this.getpendingSeller();
  }
 
 getpendingSeller(){
   this.checkStatusService.getpendingSeller().subscribe(response => {
        this.status = response;
        console.log(this.status);
   })
 }


}

