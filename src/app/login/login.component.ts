import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.services';
import { CookieService } from 'ngx-cookie-service';
import { ToasterService } from 'angular2-toaster';
import * as jwt from 'jwt-decode';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    token: any;

    constructor(
        private fb: FormBuilder,
        public authService: AuthService,
        private cookie: CookieService,
        private router: Router,
        private toast: ToasterService) { }

    ngOnInit() {
        this.initForm()
    }


    initForm() {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }


    onSubmit() {
        const loginFormData = this.loginForm.value;
        this.authService.login(loginFormData).subscribe((response: any) => {
            this.toast.pop('success', 'Success!', 'Login SuccessFully.');
            if (response && response.token) {
                this.cookie.set('accessToken', response.token);
                const profileDetail = jwt(response.token);
                this.getUserType();

                localStorage.setItem('profileDetail', JSON.stringify(profileDetail));

            }
        });
    }

    getUserType() {
        this.authService.getUserType().subscribe((response: any) => {
            if(response.role === 'M') {
                this.router.navigate(['/manager']);
            }
            if (response.role === 'E'){
                this.router.navigate(['/employee']);
            }
            if (response.role === 'S'){
                this.router.navigate(['/seller']);
            }
        });
    }

    get username() {
        return this.loginForm.get('username');
    }
    get password() {
        return this.loginForm.get('password');
    }


}
