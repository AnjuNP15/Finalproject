import { Component, OnInit } from '@angular/core';

import { userserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']

})
export class UsersComponent implements OnInit {
  users: any =[{
    userid : '',
    name : '',
    email : '',
    pwd : '',
    image : '',
    usertype : ''

  }];
  constructor(private userservice:userserviceService) { }

  ngOnInit(): void {
    this.userservice.getusers()
      .subscribe(data =>{
        console.log(data);
        this.users = data;
      });
    }
  
}
