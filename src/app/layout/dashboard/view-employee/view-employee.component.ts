import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/services/employee.services';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  getEmployee: any[] = []; 

  constructor(private toast: ToasterService,private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getViewEmployee();
  }


  getViewEmployee(){
    this.employeeService.getViewEmployee().subscribe((response: any) => {
      this.getEmployee = response;
    })
  }


  deleteEmployee(employee: any) {
    this.employeeService.deleteEmployee(employee.id)
      .subscribe(
        (response: any) => {
          const index = this.getEmployee.indexOf(employee, 0);
          if (index > -1) {
            this.getEmployee.splice(index, 1);
            this.getViewEmployee();
            this.toast.pop('success', 'Your Employee is Deleted not recover');
          }
          else {
            this.toast.pop('error', 'Your Employee is safe!');
          }
        });
  }
}
