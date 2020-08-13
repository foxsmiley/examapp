import { Component, OnInit ,Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/login/auth.service';
import {Users} from 'src/app/model/users'
import { HttpRequestComponent } from 'src/app/provider/http-request/http-request.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() user : User;
  username: string;
  password : string;
  lastName: string;
  firstName: string;
 
  confirmPassword : string;
  invalidRegister = false ;
  RegisterSuccess = false;
  successMessage : string;
  errorMessage : string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpRequestComponent,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = new Users();
    console.log(this.user)
  }
  handleRegister(){
    
    
    console.log(this.user);
    this.http.post('/api/v1/register', this.user, (result)=> {
      console.log(result)
      this.router.navigate(['/login']);
    });
    // this.authenticationService.registerUser(this.user).subscribe((result)=> {
    //   this.invalidRegister = false;
    //   this.RegisterSuccess = true;
    //   this.successMessage = 'Register Successful.';
    //   this.router.navigate(['/login']);
    // }, () => {
    //   this.invalidRegister = true;
    //   this.RegisterSuccess = false;
    //   this.errorMessage = 'Registration Failed Try again after 5mins'
    // }); 
    
  }
}
