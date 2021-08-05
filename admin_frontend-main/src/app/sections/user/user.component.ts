import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:any;
  posts:any;
  constructor(private route: ActivatedRoute,private userservice:userserviceService) 
  { 
    
  }

  ngOnInit(): void 
  {
    const routeParams = this.route.snapshot.paramMap;
  
    const userIdFromRoute = routeParams.get('id');
    console.log("userIdFromRoute is " + userIdFromRoute);

    this.userservice.getuser(userIdFromRoute)
    .subscribe(data =>
    {
      console.log(data);
      this.user = data;
      localStorage.setItem('firstname', this.user.firstname);
      localStorage.setItem('lastname', this.user.lastname);
      localStorage.setItem('userid', this.user._id);
      
    });

    this.userservice.getuserposts(userIdFromRoute)
    .subscribe(data =>
    {
         this.posts = data;
    });



    
  }

}
