import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';
import { Source } from './source';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttprequestsService {

  constructor(private http: HttpClient) { }

 
  API_KEY =  environment.API
  BASE_URL = environment.url+this.API_KEY;  
 
  
  getSources(category:string):Observable<Source[]>{
    return this.http.get<Source[]>(this.BASE_URL+"&lang=en&topic="+category);
  }


}
