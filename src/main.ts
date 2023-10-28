/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { registerLicense } from '@syncfusion/ej2-base';
registerLicense("Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhAYVFpR2NbfE50fldAallQVAciSV9jS31TfkVgWXtcdnFXQGVeVg==");


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
