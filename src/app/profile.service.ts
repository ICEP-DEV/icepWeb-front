import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  createUrl = "http://localhost:4000/register";
  display = "http://localhost:4000/students";
  deleteUrl = "http://localhost:4000"
  constructor(private http:HttpClient) { }
  
  createProfile(applicants:any)
  {
    return this.http.post<any>(this.createUrl,applicants)
  }
  public getApplicants(){
    return this.http.get<any>(this.display);
  }
  public deleteStud(studentNumber:any){

    return this.http.delete<any>( this.deleteUrl+'/'+studentNumber)
}
}