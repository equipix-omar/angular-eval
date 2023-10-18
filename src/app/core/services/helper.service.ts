import {Injectable} from '@angular/core';
import {errors} from '../models/errors.interface';
import {NavigationEnd} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() {
  }


  public handleS3Image(image_path: string): string {
    return 'https://equipix-assets.s3.us-west-2.amazonaws.com/img/' + image_path;
  }


  showingErrors(handler: errors) {
    let messages = [];
    for (let errors in handler.errors) {
      // @ts-ignore
      if (handler.errors[errors] instanceof Array) {
        // @ts-ignore
        for (let error of handler.errors[errors]) {
          messages.push(error);
        }
      } else {
                messages.push(errors);
            }

        }
        return messages.join('<br>');
    }

    public prepareNames(languages: [{ lang: string, name: string, title: string }], iso: string, is_name = 1) {
        let target_language = languages.find(language => language.lang == iso);
        let name: string | undefined = '';
        if (!target_language) {
            target_language = languages.find(language => language.lang == 'en');
        }

        if (is_name) {
            name = target_language?.name;
        } else {
            name = target_language?.title;
        }

        return name;
    }

    public routingSubscribe(component: { router: { events: { subscribe: (arg0: (e: any) => void) => any; }; }; initialiseComponent: () => void; }) {
        return component.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                component.initialiseComponent();
            }
        });
    }

    public pushMultiSelect(event: { isUserInput: any; source: { value: any; selected: any; }; }, Selection: any[], originalSource: any[]) {
        if (event.isUserInput) {
            let id = event.source.value;
            let check = event.source.selected;

            if (check) {
                // @ts-ignore
                let item = originalSource.find(element => element.id == id);
                let element_exist = Selection.find(element => element.id == id);

                if (!element_exist) {
                    Selection.push(item);
                }
            } else {
                // @ts-ignore
                Selection = Selection.filter(element => element.id != id);
            }
        }
        return Selection;
    }

    public popFromForm(form: { controls: { [x: string]: { value: any; }; }; }, form_name: string | number, item_id: any) {
        let listControl = form.controls[form_name].value;

        if (listControl) {
            listControl = listControl.filter((element: any) => element != item_id);
        }
        return listControl;
    }

    public popFromSelectionList(Selection: any[], item_id: any) {
        // @ts-ignore
        return Selection.filter(element => element.id != item_id);
    }

    public maxNumberOfPages(resp: { [x: string]: { last_page: any; }; }) {
        return (resp['pagination'] ? resp['pagination'].last_page : 1);
    }

}
