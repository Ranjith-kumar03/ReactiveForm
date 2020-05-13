import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators, FormGroup , FormArray} from '@angular/forms';
import { forbiddenNameValidator } from './Shared/userName.Validator';
import { PasswordValidator } from './Shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  registrationform: FormGroup;
  get UserName()
  {
    return this.registrationform.get('username');
  }
  get Email()
  {
    return this.registrationform.get('email');
  }

  get alternateEmails()
  {
    return this.registrationform.get('alternateEmails') as FormArray;
  }

  addAlternateEmails()
  {
   this.alternateEmails.push(this.builder.control(''));
  }


  constructor(private builder: FormBuilder)
  {

  }
  ngOnInit(): void {
    this.registrationform =this.builder.group({
      username : ["" , [Validators.required , Validators.minLength(3),forbiddenNameValidator(/suresh/)
      ,forbiddenNameValidator(/username/),forbiddenNameValidator(/jukerberg/),forbiddenNameValidator(/mark/)]],
      email: [],
      subscribe: [false],
      password : [],
      confirmPassword : [],
      address : this.builder.group({
       city : ["chennai"],
       state : ["tamil nadu"],
       postal : [89989999]
      }),alternateEmails: this.builder.array([])
    },{validator: PasswordValidator});

    this.registrationform.get("subscribe").valueChanges.subscribe(checkedValue =>{
     const email =  this.registrationform.get("email");
     if(checkedValue)
     {
       email.setValidators(Validators.required)
     }else{
        email.clearValidators();
     }
     email.updateValueAndValidity();
    });

  }

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
