import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatepostserviceService } from 'src/app/createpostservice.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  item={
    PostTitle : '',
     CreatedTime : '',
     Description : '',
     Tag : '',
     Image : '',
     Author : '',
     AuthorID : '',
     Status : ''
   }
  constructor(private route: ActivatedRoute,private createpostservice:CreatepostserviceService) { }

  ngOnInit(): void {
    //const routeParams = this.route.snapshot.paramMap;
    //const postIdFromRoute = routeParams.get('_id');
  }
    createpost()
    {
    this.createpostservice.createpost(this.item);
    
    }
    
  }


