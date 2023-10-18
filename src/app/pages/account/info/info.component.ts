import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../../core/services/helper.service";
import { UserProfileService } from 'src/app/core/services/user.service';
import { ProfileApiService } from 'src/app/core/services/Api-Services/profile.info.api.service';
import { ToastrService } from 'ngx-toastr';
import { Body, userResponseModel } from 'src/app/core/models/classes/userReponse.model';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})

/**
 * Info Component
 */
export class InfoComponent implements OnInit {

   // bread crumb items
   breadCrumbItems!: Array<{}>;
   public firstColleaps = true;
   userRespone!: userResponseModel;
  userForm!: UntypedFormGroup;
  submit!: boolean;
  constructor(protected helperService: HelperService,
             private toastService: ToastrService,
             private formBuilder: UntypedFormBuilder,
              private profileApiService:ProfileApiService) {

               }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Account', link:'/account/info' },
      { label: 'Personal Info', active: true }
    ];
    this.initUserForm();
    this._getProfileData();
  }

  /**
   * On mobile toggle button clicked
   */
   SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
}
initUserForm(){
  this.userForm= this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    logo: [''], // You can add validation if needed
    email: ['', [Validators.required, Validators.email]]});
}

_getProfileData() {

  this.profileApiService._getUserData().subscribe({
    next: (resp) => {
      console.log( 'profile data',resp);
      this.userRespone=resp;
        // Check if userDataResponse contains data
    if (this.userRespone && this.userRespone.body) {
      // Use patchValue to set the initial form control values
      this.userForm.patchValue({
        name: this.userRespone.body.name,
        phone: this.userRespone.body.phone,
        logo: this.userRespone.body.logo,
        email: this.userRespone.body.email
      });
    }

      console.log( 'userRespone data', this.userRespone);

    },
    error: (error) => {
      let error_message = error?.error?.message;
      console.log( 'profile data',error_message);
      this.toastService.error(error_message, 'Login');
    }
  });

}
get formControl() {
  return this.userForm?.controls;
}
get formControlPhone(){
  return this.userForm.get('phone');
}
  onChangeInput(event: any) {
    this.formControlPhone?.patchValue((event.target.value).replace(/\D/g, '').substr(0, 10));
  }

  validSubmit() {
    this.submit = true;
    this.updateInfo();
  }
  updateInfo() {
    let model = new userResponseModel();
    model.body = new Body();
    model.body.email = this.userForm.get('email')?.value;
    model.body.name = this.userForm.get('name')?.value;
    model.body.phone = this.userForm.get('phone')?.value;
    this.profileApiService._updateUserData(model).subscribe({
      next: (resp) => {
        this.userRespone=resp;
        this.toastService.success('Info Updated Successfully', 'Profile');

      },
      error: (error) => {
        let error_message = error?.error?.message;
        this.toastService.error(error_message, 'Register');
      }
    });
  }

}
