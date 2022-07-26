import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttprequestsService } from 'src/app/models_and_services/httprequests.service';
import { Source } from 'src/app/models_and_services/source';
@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  constructor(private route: ActivatedRoute,private httpreq:HttprequestsService ) { }
  source_category! :any;
  title = "";
  sources : any = [];
  
  
  
  ngOnInit(): void {
  this.source_category = this.route.snapshot.paramMap.get('category')
  this.title = this.source_category;

  this.getSources();
  
  }

  getSources = ()=> {
    
    this.httpreq.getSources(this.source_category).subscribe(
      (data)=>{
       this.sources = data;
       
       return this.sources;
      }
    ),(err:any) =>{
      console.log(err);
    }
   
    
    
  }

  
  




}
