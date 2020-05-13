import { Component } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
import { forbiddenNameValidator } from './Shared/userName.Validator';
import { PasswordValidator } from './Shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get UserName()
  {
    return this.registrationform.get('username');
  }

  constructor(private builder: FormBuilder)
  {

  }
  registrationform =this.builder.group({
    username : ["" , [Validators.required , Validators.minLength(3),forbiddenNameValidator(/suresh/)
    ,forbiddenNameValidator(/username/),forbiddenNameValidator(/jukerberg/),forbiddenNameValidator(/mark/)]],
    password : [],
    confirmPassword : [],
    address : this.builder.group({
     city : ["chennai"],
     state : ["tamil nadu"],
     postal : [89989999]
    })
  },{validator: PasswordValidator})
 /* registrationform =  new FormGroup({
   username : new FormControl('Ranjith Kumar'),
   password : new FormControl('airforce'),
   confirmPassword : new FormControl('airforce'),
   address : new FormGroup({
    city : new FormControl('Ranjith Kumar'),
    state : new FormControl('airforce'),
    postal : new FormControl('airforce'),
   }) */


 loadData()
 {
   this.registrationform.patchValue({
    username :"Ranjugggggggggggggggggggg",
    password : "pullanhhhhhhhhhhh",
    confirmPassword : "pullanuuuuuuuuuuuuuuuuuu",


  });
  }

}
