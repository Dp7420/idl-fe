import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signin: Signin = new Signin(); 
  error:string='';
  private apiUrl=environment.apiUrl

  login: Login = new Login();
  constructor(private httpClient: HttpClient, private router: Router) {}
  regForm = new FormGroup({
    email : new FormControl("anil@gmail.com",[Validators.required,Validators.minLength(6)]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  
  ngOnInit(): void {
    localStorage.clear();      
  }

  onSubmit() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    this.httpClient.post<any>(`${this.apiUrl}/api/auth/signin`, this.signin, { headers })
      .subscribe({
        next: (response) => {
          if (response && response.body && response.body.email === this.signin.email) {
            // alert('Admin login success');
            localStorage.clear();
            localStorage.setItem('token', JSON.stringify(response.body.token));
            this.router.navigate(['/companylist']);
          } else {
            this.error='Username Or Password is Incorrect';
          }
        },
        error: (error: HttpErrorResponse) => {
          // console.error('Login failed', error);
          this.error='Invalid credentials or insufficient permissions.';
        }
      });
  }
}

export class Signin{
  email: String = '';
  password: String = '';
}
