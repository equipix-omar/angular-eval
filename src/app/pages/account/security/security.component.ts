import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {HelperService} from "../../../core/services/helper.service";
import { changePwdModel } from 'src/app/core/models/classes/changePwd.model';
import { ProfileApiService } from 'src/app/core/services/Api-Services/profile.info.api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})

/**
 * Security Component
 */
export class SecurityComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  fieldTextType!: boolean;
  fieldNewTextType!: boolean;
  confirmfieldTextType!: boolean;

  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  constructor(private formBuilder: UntypedFormBuilder,
              private profileApiService:ProfileApiService,
              private toastService :ToastrService,
              protected helperService: HelperService) {
  }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      {label: 'Home', link: ''},
      {label: 'Account', link: '/account/info'},
      {label: 'Password & Security', active: true}
    ];

    /**
     * Bootstrap validation form data
     */
     this.validationform = this.formBuilder.group({
      apassword: ['', [Validators.required]],
      npassword: ['', [Validators.required]],
      cpassword: ['', [Validators.required]],
    });

  }

  /**
   * Password Hide/Show
   */
   toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

   /**
   * Password Hide/Show
   */
    toggleNewFieldTextType() {
      this.fieldNewTextType = !this.fieldNewTextType;
    }

    /**
   * Password Hide/Show
   */
     toggleConfirmFieldTextType() {
      this.confirmfieldTextType = !this.confirmfieldTextType;
    }

  /**
   * On mobile toggle button clicked
   */
   SideBarMenu() {
      document.getElementById('account-nav')?.classList.toggle('show');
  }

  /**
  * Bootsrap validation form submit method
  */
   validSubmit() {
    this.submit = true;
    this. updateInfo();
  }

  /**
 * Returns form
 */
  get form() {
    return this.validationform.controls;
  }
  updateInfo() {
    let model = new changePwdModel();
    model.old_password = this.validationform.get('apassword')?.value;
    model.password = this.validationform.get('npassword')?.value;
    model.password_confirmation = this.validationform.get('cpassword')?.value;
    this.profileApiService._changeUserPwd(model).subscribe({
      next: (resp) => {
         console.log( '_changeUserPwd', resp);

        this.toastService.success('Info Updated Successfully', 'Profile');

      },
      error: (error) => {
        console.log( '_changeUserPwd', error);
        let error_message = error?.error?.message;
        this.toastService.error(error_message, 'Change Password');
      }
    });
  }

}
