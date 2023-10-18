import {Component, Input, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../../../core/services/token-storage.service";
import {ToastrService} from "ngx-toastr";
import {LoginApiService} from "../../../core/services/Api-Services/login.api.service";
import {LoginModel} from "../../../core/models/classes/login.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HelperService} from "../../../core/services/helper.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Input() modal!: any;
  @Input() toggleSecondModal!: any;

  fieldTextType!: boolean;
  loginForm!: UntypedFormGroup;
  submit!: boolean;

  constructor(private formBuilder: UntypedFormBuilder,
              private tokenStorageService: TokenStorageService,
              private modalService: NgbModal,
              protected helperService: HelperService,
              private toastService: ToastrService,
              private loginApiService: LoginApiService) {
  }

  ngOnInit(): void {
    /**
     * Bootstrap validation form data
     */
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    document.body.classList.add('bg-secondary');
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
    this.login();
  }

  login() {
    let model = new LoginModel(0);
    model.email = this.loginForm.get('email')?.value;
    model.password = this.loginForm.get('password')?.value;

    this.loginApiService.login(model).subscribe({
      next: (resp) => {
        this.tokenStorageService.saveToken(resp.token);
        this.tokenStorageService.saveExpireAt(resp.expire_at);
        this.tokenStorageService.saveIsGuest(String(0));
        this.toastService.success('Login Successfully', 'Register');
        window.location.reload();
      },
      error: (error) => {
        let error_message = error?.error?.message;
        this.toastService.error(error_message, 'Login');
      }
    });
  }

  /**
   * Returns form
   */
  get form() {
    return this.loginForm.controls;
  }

  secondModal(toggleSecondModal: any) {
    this.modalService.open(toggleSecondModal, {size: 'lg', centered: true});
    this.modal.close('Close click');
  }
}
