import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl,  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
  }

  // inscriptionForm!: FormGroup;

  // constructor(private formBuilder: FormBuilder) {}

  // ngOnInit() {
  //   this.inscriptionForm = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', [Validators.required, this.passwordMatchValidator()]]
  //   });
  // }

  // passwordMatchValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: boolean } | null => {
  //     const password = control.get('password');
  //     const confirmPassword = control.get('confirmPassword');

  //    // if (password.value === confirmPassword.value) {
  //     if (password && confirmPassword && password.value === confirmPassword.value) {
  //       return null;
  //     } else {
  //       return { passwordMismatch: true };
  //     }
  //   };
  // }

  // soumettreFormulaire() {
  //   if (this.inscriptionForm.valid) {
  //     console.log('Formulaire soumis avec succès !');
  //     console.log('Données du formulaire :', this.inscriptionForm.value);
  //   }
  // }
  
}
