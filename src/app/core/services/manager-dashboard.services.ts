import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  getDashboardDetail() {
    return this.http.get(environment.endPoint + 'dashboard/');
  }

  setStatus(data: any) {
    return this.http.post<any>(environment.endPoint + 'setstatus/',data );
  }

  trackOrder(data: any) {
    return this.http.post<any>(environment.endPoint + 'trackorder/',data );
  }

  getpendingSeller() {
    return this.http.get<any>(environment.endPoint + 'getpendingseller/');
  }
  
}
