import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  
  item={
    _id : '',
    PostTitle : '',
    CreatedTime : '',
    Description : '',
    Tag : '',
    Status : '',
    Image : '',
    Author : '',
    AuthorID : ''
  }
  constructor(private http:HttpClient) { }
  server_address:string='/api'


  getpost(id:any){
    return this.http.get("http://localhost:3000/post/"+id);
  }
  updatepost(item:any){
    console.log("the item to post request is" + item);
     return this.http.post("http://localhost:3000/editpost",item)
    .subscribe (data => {console.log(data)})
  }
}





