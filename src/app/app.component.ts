import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   UsuarioForm: FormGroup//prectica clase
   Utelefonos:FormArray//practica clase
   operadoras:string[]

  loginform: FormGroup
  usuario:string
  email: string
  password: string
  telefonos:string[]
  seleccionaTipo=[]
  tipoError:boolean = true
 TipoConsultoria: Array <string> =['Publica','Privada','Personal','otro'];
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.crearUsuarioform();//prectica clase
    this.operadoras=['Claro','Movistar','CNT','TUENTY'],
      this.loginform = this.formBuilder.group({
        tipoSa:this.addTiposSa(), 
        usuario: ['', [Validators.required,Validators.pattern('[A-Z]{1}[a-z]{3,10}')]],
        email: ['', [Validators.required,Validators.pattern('[a-z]+[a-z0-9.-_]*@[a-z]+[a-z0-9]*.[a-z]{2,3}[.]?[a-z]*')]],
        password: ['' ,[Validators.required,Validators.pattern('[a-zA-Z0-9]{5,15}')]],
        telefonos:this.formBuilder.array([this.formBuilder.group({telefono:['',[Validators.required,Validators.pattern('(09)+[0-9]{8}')]]
        ,operadora:[,[Validators.required,Validators.pattern('[a-z]{4,10}')]]})])
      });
      
  }
  crearUsuarioform(){//practica clase
    this.UsuarioForm=this.formBuilder.group({
      nombre:[],
      cedula:[],
      Utelefonos:this.formBuilder.array([this.creartelefonos()])
    })
  }
  creartelefonos():FormGroup{//prectica clase
    return this.formBuilder.group({
      operadora:['999',[]],
      numero:[]
    })
  }

  addTiposSa(){
    const arr = this.TipoConsultoria.map(element=>{
    return this.formBuilder.control(false);
   });
   return this.formBuilder.array(arr);
  }
  validaLoginForm(){
    if(this.loginform.valid){
      this.usuario=JSON.stringify(console.log(this.loginform.controls['usuario'].value))              
      this.email = JSON.stringify(console.log(this.loginform.controls['email'].value))
      this.password =JSON.stringify(console.log(this.loginform.controls['password'].value))
    }else{
      this.usuario = JSON.stringify(this.loginform.controls['usuario'].errors)
      this.email = JSON.stringify(this.loginform.controls['email'].errors)
      this.password =JSON.stringify(this.loginform.controls['password'].errors)
      if(this.loginform.invalid){
       console.log('usuario'+this.usuario),
       console.log('email'+this.email),
        console.log('password'+this.password),
        console.log('telefonos'+this.telefonos)
        alert('datos enviados')
      }
    }
  }
  get gettiposS(){
    return this.loginform.get('tipoSa') as FormArray;
  }
  get gettelefonos(){
    return this.loginform.get('telefonos') as FormArray;
  }
  addtelefono(){
    const controltel = <FormArray>this.loginform.controls['telefonos'];
    controltel.push(this.formBuilder.group({telefono:[],operadora:[]}));
  }
  deleteTel(index){
    const telefono = <FormArray>this.loginform.controls['telefonos'];
    telefono.removeAt(index);
  }
  getseleccionTipo(){
    this.seleccionaTipo=[];
    this.gettiposS.controls.forEach((control,i)=>{
      if(control.value){
        this.seleccionaTipo.push(this.TipoConsultoria[i]);
      }
    });
    console.log(this.seleccionaTipo)
    this.tipoError=this.seleccionaTipo.length>0?false:true
  }

  addtelefonoForm(){//practica clase
    this.Utelefonos=this.UsuarioForm.get('Utelefonos') as FormArray;
    this.Utelefonos.push(this.creartelefonos());
  }
  eliminartelefono(i){
    this.Utelefonos.removeAt(i)
  }
  funcionE(e){

 this.operadoras=e;
   console.log(e)
  }
}