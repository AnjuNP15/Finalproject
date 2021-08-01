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
    const userIdFromRoute = Number(routeParams.get('userid'));
    
    
    this.userservice.getuser(userIdFromRoute)
    .subscribe(data =>
    {
        this.user = data;
    });

    this.userservice.getuserposts(userIdFromRoute)
    .subscribe(data =>
    {
         
      this.posts = data;
    });



    
  }

}
