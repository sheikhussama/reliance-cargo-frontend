import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  storeEmployee(data: any) {
    return this.http.post<any>(environment.endPoint + 'createemployee/',data );
  }
  
  getViewEmployee(){
    return this.http.get<any>(environment.endPoint + 'viewallstaffer/');

  }

  deleteEmployee(id:any ){
    return this.http.delete<any>(environment.endPoint + 'deletestaffer/' + id);
  }
}
