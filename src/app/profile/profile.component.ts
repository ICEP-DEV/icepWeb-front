import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../app/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  applicants:any=[];
  constructor(private myProfile: ProfileService) { }

  ngOnInit(): void {
    this.getApplicants();
  }
  getApplicants(){
    this.myProfile.getApplicants().subscribe((data:any)=>this.applicants=data);
  }
 

}

