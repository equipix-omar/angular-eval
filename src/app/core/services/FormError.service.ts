import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FormErrorService {
    constructor() {
    }

    public markAsTouched(controls: any[]) {
        Object.keys(controls).forEach(controlName => {
                // @ts-ignore
                controls[controlName].markAsTouched();
                if (controlName == 'inventory_data') {
                    // @ts-ignore
                    let lang_objects = controls[controlName].controls;
                    Object.keys(lang_objects).forEach(object_index => {
                        let lang_controls = lang_objects[object_index].controls;
                        Object.keys(lang_controls).forEach(controlName => {
                            lang_controls[controlName].markAsTouched();
                        });
                    });
                }
            }
        );
        return;
    }

    public isControlHasError(form: any, controlName: any, validationType: string) {
        const control = form.controls[controlName];
        if (!control) {
            return false;
        }
        return control.hasError(validationType) && (control.dirty || control.touched);
    }

}
