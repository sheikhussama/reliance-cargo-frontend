import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../core/services/manager-dashboard.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-status-seller',
  templateUrl: './status-seller.component.html',
  styleUrls: ['./status-seller.component.css']
})
export class StatusSellerComponent implements OnInit {

  statuForm: FormGroup
  status: any;
  constructor(private toast: ToasterService,private fb: FormBuilder,
    private checkStatusService: ManagerService) { }

  ngOnInit() {
    this.getpendingSeller();
  }

  getpendingSeller() {
    this.checkStatusService.getpendingSeller().subscribe(response => {
      this.status = response;
      // if(this.status.length === 0) {
      //   this.toast.pop('error', 'Record Not Found');
      //   this.notFound = 'Record Not Found'
      // }
    })
  }


  approve(id: any, status: any) {
    const params = {
      id: id,
      status: status
    }
    this.checkStatusService.setStatus(params).subscribe(response => {
      this.toast.pop('success', response.result);

    })
  }

  disapproved(id: any, status: any) {
    const params = {
      id: id,
      status: status
    }
    this.checkStatusService.setStatus(params).subscribe(response => {
      this.toast.pop('success', response.result);

    })
  }
}

