import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import {CommonModel} from '../common.model';
import {CommonService} from '../common.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any;
  password:any;
  id:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  showRedirect!:boolean;
  loginDetails:CommonModel[] = [];
  getRedirect:any;
  @ViewChild('formDetails') form:any;

  constructor(
    private commomService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData();
    this.showAdd = true;
    this.showUpdate = false;
    this.getRedirect = localStorage.getItem("password");
  }

  OnSubmit(data:any){
    console.log(data.value);
    if(this.form.valid){
      this.commomService.postMethod(data.value).subscribe(
        (res:any)=> {
          this.loginDetails = res;
          console.log(res);
        }
      )
      alert("Login Submitted Successfully");
      this.getData();
      this.form.reset();
    }
  }

  getData(){
    this.commomService.getMethod().subscribe(
      (res:any) =>{
        this.loginDetails = res;
        console.log(res);
      }
    )
  }


  Del(data:any){
    console.log(data.id);
    this.commomService.deleteMethod(data.id).subscribe
    ((res:any)=> {
      this.loginDetails = res;
    })
    alert("Are you sure?");
    window.location.reload();
  }

  edit(data:any){
    this.showAdd = false;
    this.showUpdate = true;
    if(data){
      this.email = data.userName;
      this.password = data.password;
      this.id = data.id;
    }
  }

  update(data:any){
    let id = this.id;
    console.log(id);
    this.commomService.putMethod(data.value, id).subscribe
    ((res:any) => {
      this.loginDetails = res;
    })
    alert("Data updated successfully");
    window.location.reload();
  }

  redirect(){
    this.router.navigate(['/login-data']);
  }
}
