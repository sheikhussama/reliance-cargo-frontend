import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ManagerService } from '../../../core/services/manager-dashboard.services';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-tracking-info',
  templateUrl: './tracking-info.component.html',
  styleUrls: ['./tracking-info.component.css']
})
export class TrackingInfoComponent implements OnInit {

  trackingInfo: FormGroup;

  constructor(private fb: FormBuilder,
    private managerService: ManagerService,
    private toast: ToasterService) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.trackingInfo = this.fb.group({
      tracking_id: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const data = this.trackingInfo.value;
    this.managerService.trackOrder(data).subscribe((response: any) => {
      console.log(response);
      // this.toast.pop('success', 'Success!', 'Employee Created SuccessFully.');
      this.callCompleted()
    });
  }

  callCompleted() {
    this.trackingInfo.reset();
  }

}
