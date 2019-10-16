import { AbstractControl, ValidationErrors, PatternValidator, ValidatorFn } from '@angular/forms';
import { Input } from '@angular/core';

export class inputValidators{
    @Input() error : string;
    
    static cannotContainSpecialCharacters(control: AbstractControl): ValidationErrors | null {
        const pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
    
        if (pattern.test(control.value as string)) {
          return {cannotContainSpecialCharacters: true};
        }    
        return null;
      }
    
      static cannotBeBlank(control: AbstractControl): ValidationErrors | null {
        const input = (control.value as string).trim();
        if (input.length <= 0) {
          var boo = {cannotBeBlank: true}
          return boo;
        }    
        return null;
      }

          
}