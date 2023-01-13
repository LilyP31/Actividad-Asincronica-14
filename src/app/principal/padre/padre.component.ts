import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { map } from 'rxjs';


@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

 constructor(private formBuilder : FormBuilder){ }

  datos_padre: any;
  botonDeshabilitado = true;
  mostrar : boolean = false;

 registroForm = this.formBuilder.group({
  nombres: ['',Validators.required],
  dni: ['', Validators.required],
  estadocivil:['',Validators.required],
});

  // Generar un metodo get para cada campo del formulario reactivo
  get dni(){ return this.registroForm.get('dni');}
  get nombres(){ return this.registroForm.get('nombres');}
  get estadocivil(){ return this.registroForm.get('estadocivil');}

     // genera que el registroForm se vuelva un array 

     Enviar(){
      this.datos_padre = (this.registroForm.value); 
    }
     
    Activar(){
      if(this.registroForm.valid){
        this.botonDeshabilitado = true;
      } else {
        this.botonDeshabilitado = false;
      }
    }
        
    

    // this.datos_padre = Object.values(this.registroForm.getRawValue()); 
   ngOnInit(){
      this.registroForm.statusChanges.pipe(map(status => status === 'INVALID')).subscribe(status => this.botonDeshabilitado = status);

    }

  onClear() {
    this.registroForm.reset();
  }

}
