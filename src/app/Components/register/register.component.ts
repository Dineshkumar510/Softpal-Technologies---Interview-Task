import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:any;
  password:any;
  ObjData:any[] = []

  @ViewChild('formDetails') form:any;

  constructor(
    private commomService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.commomService.getMethod().subscribe(
      (res:any)=> {
        this.ObjData = res;
        console.log(this.ObjData);
      }
    );
  }

  OnSubmit(data:any){
    if(this.form.valid){
      const resultData = this.ObjData.filter(
        (data:any) => data.userName == this.email && data.password == this.password
      )
      console.log("Result Data", resultData);

      if(resultData.length !== 0){
          this.router.navigate(['/login-data']);
      }
      else {
        alert("Invalid userName or Password")
      }
      this.form.reset();
    }
  }

}
