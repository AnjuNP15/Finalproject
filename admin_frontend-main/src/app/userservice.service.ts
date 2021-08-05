
import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class userserviceService {
  item={
    userid : '',
    name : '',
    email : '',
    pwd : '',
    image : '',
    usertype : ''
  }
  constructor(private http:HttpClient) { }

 server_address:string='/api'

  getuser(id:any){
    return this.http.get("http://localhost:3000/user/" + id);
  }
  getuserposts(id:any){
    return this.http.get("http://localhost:3000/posts/"+id);
  }
  getusers(){
    return this.http.get("http://localhost:3000/users");
  }
  getpost(id:any){
    return this.http.get("http://localhost:3000/post/"+id);
  }
 newuser(item:any)
  {   
    return this.http.post("http://localhost:3000/insertuser",{"user":item})
    .subscribe(data =>{console.log(data)})
  }
  
}
