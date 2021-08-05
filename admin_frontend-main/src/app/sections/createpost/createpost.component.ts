import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private route: Router,private createpostservice:CreatepostserviceService) { }

  ngOnInit(): void {
    //const routeParams = this.route.snapshot.paramMap;
    //const postIdFromRoute = routeParams.get('_id');
  }
    createpost()
    {
    console.log(this.item);

    var authorid = localStorage.getItem('userid');
    authorid = authorid == null ? '' : authorid.toString();
    
    var firstname = localStorage.getItem('firstname'); 
    firstname = firstname == null ? '' : firstname.toString();
    var lastname = localStorage.getItem('lastname'); 
    lastname = lastname == null ? '' : lastname.toString();

    this.item.CreatedTime=new Date().toISOString();
    this.item.Status='pending';
    this.item.AuthorID = authorid;
    this.item.Author=firstname+' ' + lastname;
      this.createpostservice.createpost(this.item);
      alert("Success");
      console.log("Success");
      console.log('/user/' + authorid)
    this.route.navigate(['/user/' +authorid]);
    
    }
    
   
  }


