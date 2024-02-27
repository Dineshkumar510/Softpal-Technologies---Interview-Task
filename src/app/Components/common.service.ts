import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  userData:BehaviorSubject<any> | undefined;

  constructor(
    private http: HttpClient,
  ) { }

    postMethod(data:any){
      return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res)=>{
        this.userData?.next(res);
        return res;
      }))
    }

    getMethod(){
      return this.http.get<any>("http://localhost:3000/posts").pipe(map((res)=>{
        return res;
      }))
    }

    putMethod(data:any, id:any){
      return this.http.put<any>(`http://localhost:3000/posts/${id}`, data)
      .pipe(map((res)=>{
        return res;
      }))
    }

    deleteMethod(id:any){
      return this.http.delete<any>(`http://localhost:3000/posts/${id}`)
      .pipe(map((res)=>{
        return res;
      }))
    }
}
