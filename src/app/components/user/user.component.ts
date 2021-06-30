import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUsuario } from 'app/other/interfaces';
import { ApiService } from '@services/api.service';
import { CovidserviceService } from '@services/covidservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent  {
  public user: LoginUsuario


  constructor(public api:CovidserviceService,private builder: FormBuilder) { 
    this.user= new LoginUsuario()

   this.signupForm = this.builder.group({
     user : ['',Validators.required] ,
     password: ['',Validators.compose([Validators.required,Validators.minLength(3)])]
   })
  }


  isLogged : boolean = false
  /**Contendrá las reglas del formulario */
  signupForm: FormGroup
  signIn(values){
    console.log(values)
  }
  /*login(){
    const user = (document.querySelector('#user') as HTMLInputElement).value
    const password = (document.querySelector('#password') as HTMLInputElement).value
    this.user.nombreUsuario= user
    this.user.password= password
    this.api.login(this.user).subscribe(
      response=>{
        this.user=response
        console.log(this.user)

      }
    )
  }*/

}
