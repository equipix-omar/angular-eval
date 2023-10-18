import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from "../../core/services/token-storage.service";
import {ToastrService} from "ngx-toastr";
import {RegisterApiService} from "../../core/services/Api-Services/register.api.service";
import {RegisterModel} from "../../core/models/classes/register.model";
import {HelperService} from "../../core/services/helper.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

/**
 * Signup Component
 */
export class SignupComponent implements OnInit {

  passTextType!: boolean;
  fieldTextType!: boolean;
  //  Validation form
  registerForm!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  constructor(private formBuilder: UntypedFormBuilder,
              private tokenStorageService: TokenStorageService,
              protected helperService: HelperService,
              private registerApiService: RegisterApiService,
              private toastService: ToastrService) {
  }

  ngOnInit(): void {
    /**
     * Bootstrap validation form data
     */
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });

    document.body.classList.add('bg-secondary');

  }

  /**
   * Password Hide/Show
   */
   togglePassFieldTextType() {
    this.passTextType = !this.passTextType;
  }

  /**
   * Password Hide/Show
   */
   toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  /**
   * Bootstrap validation form submit method
   */
  validSubmit() {
    this.submit = true;
    this.register();
  }

  register() {
    let model = new RegisterModel(0);
    model.email = this.registerForm.get('email')?.value;
    model.name = this.registerForm.get('name')?.value;
    model.phone = this.registerForm.get('phone')?.value;
    model.password = this.registerForm.get('password')?.value;

    this.registerApiService.register(model).subscribe({
      next: (resp) => {
        this.tokenStorageService.saveToken(resp.token);
        this.tokenStorageService.saveExpireAt(resp.expire_at);
        this.tokenStorageService.saveIsGuest(String(0));
      },
      error: (error) => {
        let error_message = error?.error?.message;
        this.toastService.error(error_message, 'Register');
      }
    });
  }

  /**
   * Returns form
   */
  get form() {
    return this.registerForm.controls;
  }

}
