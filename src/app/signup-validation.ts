import { AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

// import { AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export function  confirmPasswordValidator(control:AbstractControl):{[key:string]:boolean} | null {
    const password = control.get('password');
    const confirmPassword= control.get('confirmPassword');
    if((password.value === confirmPassword.value )){
        console.log("Matched")
        return {'match':false};
    }
    if((password.value !== confirmPassword.value) && confirmPassword.dirty){
        console.log("Mis Match")
        return {'match':true};
    }
}

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword= control.get('confirmPassword');
  
    return password && confirmPassword && password.value === confirmPassword.value ? { 'identityRevealed': true } : null;
  };
export class SignupValidation {
    
     
}
