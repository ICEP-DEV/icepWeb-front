import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../app/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

applicants:any=[];
  constructor(private myProfile: ProfileService) { }

  ngOnInit(): void {
    this.getApplicants();
  }
  getApplicants(){
    this.myProfile.getApplicants().subscribe((data:any)=>this.applicants=data);
  }
  deleteStud(studentNumber:number)
  {
    this.myProfile.deleteStud(studentNumber).subscribe(data => {
      this.getApplicants();
    })
  }

}
