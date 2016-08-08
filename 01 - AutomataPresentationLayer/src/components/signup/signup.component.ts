import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';

declare var require: any;
const styles   = require('./signup.component.css');
const template = require('./signup.component.html');

@Component({
  selector: 'signup',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: template,
  styles: [ styles ]
})

export class SignUp {
  constructor(public router: Router, public http: Http) {
  }

  protected signup(event, username, password) {
    // event.preventDefault();
    // let body = JSON.stringify({ username, password });
    // this.http.post('http://localhost:3001/users', body, { headers: contentHeaders })
    //   .subscribe(
    //     response => {
    //       localStorage.setItem('id_token', response.json().id_token);
    //       this.router.navigate(['/home']);
    //     },
    //     error => {
    //       alert(error.text());
    //       console.log(error.text());
    //     }
    //   );
    alert('eaeaeaeaea');
  }

  protected login(event) {
    event.preventDefault();
    this.router.navigate(['/login']);
  }
}
