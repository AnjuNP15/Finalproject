import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:any;
  constructor(private route: ActivatedRoute,private postservice:PostserviceService) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = routeParams.get('_id');
    
   
    this.postservice.getpost(postIdFromRoute)
    .subscribe(data =>{
            
      this.post = data;
    });
    


  }

}
