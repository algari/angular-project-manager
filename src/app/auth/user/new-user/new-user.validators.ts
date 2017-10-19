import { AbstractControl } from '@angular/forms';

export class NewUserValidators {
  static checkPassword( control: AbstractControl ) {
    const regexPassword = /[a-z]{4}\d{3}$/i;
    const isValid = regexPassword.test( control.value );
    return isValid ? null : { invalidPassword: true };
  }
}