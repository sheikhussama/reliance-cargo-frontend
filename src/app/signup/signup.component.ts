import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../core/services/auth.services';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    studentRegTab: any = [];
    actionButtons: any = { next: 'Next', previous: 'Previous' };
    signUpForm: FormGroup;
    natureOfAcc: any;
    duration: any;
    salePerson: any;
    reference: any;
    producType: any;
    city: any;

    constructor(private fb: FormBuilder,
        public authService: AuthService,
        private cookie: CookieService,
        private router: Router,
        private toast: ToasterService) {
        this.initRegisterTabs();
    }

    ngOnInit() {
        this.initForm();
        this.natureOfAccount();
        this.timeDuration();
        this.selectCity();
        this.selectReferences();
        this.prodType();
        this.saleperson();
    }


    changeTab(action: String) {

        const tab: any = this.getCurrentTab();
        const index: any = this.studentRegTab.indexOf(tab);
        if (action === 'next' && tab.order < 5) {
            tab.isActive = false;
            this.studentRegTab[index + 1].isActive = true;
            // On second last tab change button title
            if (tab.order === 4) {
                this.actionButtons.next = 'Submit';
            }

        } else if (action === 'previous' && tab.order > 1) {
            tab.isActive = false;
            this.studentRegTab[index - 1].isActive = true;
            // Make sure that Submit will only visiable on 3rd step
            this.actionButtons.next = 'Next';

        }


    }

    getCurrentTab() {
        return this.studentRegTab.filter(tab => tab.isActive)[0];
    }

    initRegisterTabs() {
        const tabs = [
            {
                isActive: true,
                key: 'profile',
                title: 'Profile Information',
                order: 1,
            },
            {
                isActive: false,
                key: 'shipping',
                title: 'Shipping Information',
                order: 2,
            },
            {
                isActive: false,
                key: 'bank',
                title: 'Bank Information',
                order: 3,
            },
            // {
            //     isActive: false,
            //     key: 'document',
            //     title: 'Document Attachment',
            //     order: 4
            // },
            {
                isActive: false,
                key: 'billing',
                title: 'Billing Information',
                order: 4
            },
            {
                isActive: false,
                key: 'login',
                title: 'Login Information',
                order: 5
            }
        ];
        this.studentRegTab = tabs;
    }

    natureOfAccount() {
        this.natureOfAcc = [
            {
                id: 1,
                value: 'Cash On Delivery Account'
            },
            {
                id: 2,
                value: 'Corporate Invoicing Amount'
            }
        ]
    }
    timeDuration() {
        this.duration = [
            {
                id: 1,
                value: 'Daily'
            },
            {
                id: 2,
                value: 'Weekly'
            },
            {
                id: 3,
                value: 'Monthly'
            }
        ]
    }
    selectCity() {
        this.city = [
            {
                id: 1,
                value: 'karachi'
            },
            {
                id: 2,
                value: 'Lahore'
            },
            {
                id: 3,
                value: 'Islamabad'
            },
            {
                id: 3,
                value: 'Faisalabad'
            }
        ]
    }
    selectReferences() {
        this.reference = [
            {
                id: 1,
                value: 'Facebook'
            },
            {
                id: 2,
                value: 'LinkedIn'
            },
            {
                id: 3,
                value: 'Instagram'
            },
            {
                id: 4,
                value: 'Trax.pk website'
            },
            {
                id: 5,
                value: 'Friends'
            },
            {
                id: 5,
                value: 'Word of Mouth'
            }
        ]
    }
    prodType() {
        this.producType = [
            {
                id: 1,
                value: 'Apparel'
            },
            {
                id: 2,
                value: 'Automotive Parts'
            },
            {
                id: 3,
                value: 'Accessories'
            },
            {
                id: 4,
                value: 'Personal Electronics(Mobile Phones,Laptops,etc)'
            },
            {
                id: 5,
                value: 'Electronics Accessories(Cases,Charges,etc)'
            },
            {
                id: 6,
                value: 'Gadgets'
            },
            {
                id: 7,
                value: 'Jewellery'
            },
            {
                id: 8,
                value: 'Cosmetics'
            },
            {
                id: 9,
                value: 'Stationery'
            },
            {
                id: 10,
                value: 'Handicrafts'
            },
            {
                id: 11,
                value: 'Home-made Items'
            },
            {
                id: 12,
                value: 'Footwear'
            },
            {
                id: 13,
                value: 'Watches'
            },
            {
                id: 14,
                value: 'Leather Items'
            },
            {
                id: 15,
                value: 'Organic and Health Products'
            },
            {
                id: 16,
                value: 'Applliances and Consumer Electronics'
            },
            {
                id: 17,
                value: 'Home Decor and Interior Items'
            },
            {
                id: 18,
                value: 'Toys'
            },
            {
                id: 19,
                value: 'Pet Supplies'
            },
            {
                id: 20,
                value: 'Athletics and Fitness Items'
            },
            {
                id: 21,
                value: 'Vochers and Coupons'
            },
            {
                id: 22,
                value: 'MarketPlace'
            },
            {
                id: 23,
                value: 'Documents and letters'
            },
            {
                id: 24,
                value: 'Other'
            }
        ]
    }
    saleperson() {
        this.salePerson = [
            {
                id: 1,
                value: 'Anum Khan'
            },
            {
                id: 2,
                value: 'Asad Ali'
            },
            {
                id: 3,
                value: 'Umer Balouch'
            },
            {
                id: 4,
                value: 'Ayesha Khan'
            },
            {
                id: 5,
                value: 'Aslam Kan'
            },
            {
                id: 6,
                value: 'Mehmood Khan'
            }
        ]
    }


    initForm() {
        this.signUpForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
            company_name: ['', [Validators.required]],
            company_owner: ['', [Validators.required]],
            company_address: ['', [Validators.required]],
            company_phone: ['', [Validators.required]],
            cnic_no: ['', [Validators.required]],
            comapny_url: ['', [Validators.required]],
            company_city: [null, [Validators.required]],
            nature_of_account: [null, [Validators.required]],
            ntn_number: ['', [Validators.required]],
            strn_number: ['', [Validators.required]],
            expected_shipments: [null, [Validators.required]],
            average_shipment_duration: ['', [Validators.required]],
            reference_name: [null, [Validators.required]],
            sale_person: [null, [Validators.required]],
            products_type: [null, [Validators.required]],
            pickup_address: ['', [Validators.required]],
            contact_person_name: ['', [Validators.required]],
            contact_person_phone: ['', [Validators.required]],
            contact_email_address: ['', [Validators.required]],
            comapny_email_address: ['', [Validators.required]],
            shipper_city: [null, [Validators.required]],
            bank_name: ['', [Validators.required]],
            account_title: ['', [Validators.required]],
            branch_name: ['', [Validators.required]],
            IBAN_number: ['', [Validators.required]],
            bank_city: [null, [Validators.required]],
            account_number: ['', [Validators.required]],
            billing_info: ['', [Validators.required]],
            billing_person_name: ['', [Validators.required]],
            billing_person_phone: ['', [Validators.required]],
            billing_person_email: ['', [Validators.required]],
            billing_address: ['', [Validators.required]],
        });
    }



    onSubmit() {
        const signupData = this.signUpForm.value;
        console.log(signupData);
        const params = {
            logininfo: {
                username: signupData.username,
                password: signupData.password,
            },
            company_info: {
                company_name: signupData.company_name,
                company_owner: signupData.company_owner,
                company_address: signupData.company_address,
                company_phone: signupData.company_phone,
                cnic_no: signupData.cnic_no,
                comapny_url: signupData.comapny_url,
                company_city: signupData.company_city,
                nature_of_account: signupData.nature_of_account,
                ntn_number: signupData.ntn_number,
                strn_number: signupData.strn_number,
                expected_shipments: signupData.expected_shipments,
                average_shipment_duration: signupData.average_shipment_duration,
                reference_name: signupData.reference_name,
                sale_person: signupData.sale_person,
                products_type: signupData.products_type,
            },
            shipping_info: {
                pickup_address: signupData.pickup_address,
                contact_person_name: signupData.contact_person_name,
                contact_person_phone: signupData.contact_person_phone,
                comapny_email_address: signupData.comapny_email_address,
                shipper_city: signupData.shipper_city,
            },
            bank_info: {
                bank_name: signupData.bank_name,
                account_title: signupData.account_title,
                branch_name: signupData.branch_name,
                IBAN_number: signupData.IBAN_number,
                bank_city: signupData.bank_city,
                account_number: signupData.account_number,
            },
            billing_info: {
                billing_person_name: signupData.billing_person_name,
                billing_person_phone: signupData.billing_person_phone,
                billing_person_email: signupData.billing_person_email,
                billing_address: signupData.billing_address,
            }
        }
        this.authService.signUp(params).subscribe(() => {
            this.toast.pop('success', 'Signup Successfull', '');
            this.router.navigate(['/login']);
        });
    }

}