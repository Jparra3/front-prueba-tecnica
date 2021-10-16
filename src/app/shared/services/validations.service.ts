import { Injectable } from '@angular/core';
// default, info, success, warning, error
import {NotifierService} from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor(private notifier: NotifierService) { }

  validateEmptyFields(form: any, snackBar = true) {
    const response = {success: true, data: null};
    for (const key in form) {
      if (form.hasOwnProperty(key)) {
        if (form[key].required) {
          if (String(form[key].value).trim() === '' || form[key].value === null) {
            form[key].messages = 'Este campo es requerido.';
            response.success = false;
          } else {
            form[key].messages = null;
          }
        }
      }
    }

    if (snackBar && !response.success) {
      // message,actions,durations,horizontalPosition,verticalPosition
      this.notifier.notify('warning', 'Faltan campos a diligenciar.');
    }
    response.data = form;
    return response;
  }
}
