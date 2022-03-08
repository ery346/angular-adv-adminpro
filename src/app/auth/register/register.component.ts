import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { UsuarioService } from '../../shared/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    nombre: ['', Validators.required],
    email:  ['',[Validators.required, Validators.email]],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    terminos: [ '', Validators.required],
  },{
    validacion: [this.camposIguales( 'password' , 'password2' )]
  })
  constructor( private fb: FormBuilder, private usuarioS: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  crearUsuario(){
    console.log(this.registerForm.value, this.registerForm.valid)
    if (this.registerForm.invalid) {
     return this.registerForm.markAllAsTouched();
    }
    
    this.usuarioS.crearUsuario(this.registerForm.value)
            .subscribe(res => {
              console.log('usuario creado')
              this.router.navigateByUrl('/login');
            }, err => {
              Swal.fire('Error', err.error.msg, 'error')
            })
    this.registerForm.reset();//resetea todo el formulario
  }

  contrasenasNoValidas(valor: string){
    const pass1 = this.registerForm.controls.password.value;
    const pass2 = this.registerForm.controls[valor].value;
    if (pass1 === pass2) {
      return false;
    }else{
      return true;
    }


  }
  campoNoValido(valor: string): boolean{

    if(this.registerForm.controls[valor].invalid && this.registerForm.controls[valor].touched){
      return true;
    }
    return false;

  }

  camposIguales( campo1: string, campo2: string){
    return ( formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get( campo1 )?.value;
      const pass2 = formGroup.get( campo2 )?.value

      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({ noIguales: true})
        return { noIguales: true }
      }

      formGroup.get(campo2)?.setErrors( null )
      return null;
    }
  }
}
