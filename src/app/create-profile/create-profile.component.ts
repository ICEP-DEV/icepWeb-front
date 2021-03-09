import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../app/profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  showMsg = false;

createProf:any = {}
  constructor(private create: ProfileService) { }

  ngOnInit(): void {
  }
  createProfile(){
    this.create.createProfile(this.createProf).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
