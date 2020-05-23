import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/services/employee.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder,
   private employeeService: EmployeeService,
   private toast: ToasterService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.employeeForm = this.fb.group({
        employee_name: ['', [Validators.required]],
        employee_city: ['', [Validators.required]],
        employee_phone: ['', [Validators.required]],
        employee_email: ['', [Validators.required]],
        employee_address: ['', [Validators.required]],
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
       
    });
}

onSubmit() {
  const data = this.employeeForm.value;
  this.employeeService.storeEmployee(data).subscribe((response: any) => {
      this.toast.pop('success', 'Success!', 'Employee Created SuccessFully.');
      this.callCompleted()
  });
}

callCompleted(){
  this.employeeForm.reset();
}


}
