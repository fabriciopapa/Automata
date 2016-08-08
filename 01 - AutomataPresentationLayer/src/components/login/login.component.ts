import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';

declare var require: any;
const styles   = require('./login.component.css');
const template = require('./login.component.html');

@Component({
  selector: 'login',
  directives: [ ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: template,
  styles: [ styles ]
})

export class Login {
  constructor(public router: Router, public http: Http) {
  }

  protected login(event, username, password) {
    // event.preventDefault();
    // let body = JSON.stringify({ username, password });
    // this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
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
    alert('eaeae');
  }

  protected signup(event) {
    event.preventDefault();
    this.router.navigate(['/signup']);
  }
}
