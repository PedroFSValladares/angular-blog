import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Source } from '../models/source';

class ApiUrl{
  baseUrl:string = environment.apiBaseUrl
  params:{key:string, value:string|number}[] = []

  addParam(newKey:string, newValue:string|number){
    this.params.push({key: newKey, value: newValue})
  }

  getEndpoint(endpoint:string):string{
    this.addParam('apiKey', environment.apiKey)
    
    let urlParams = this.params.map((param) => `${param.key}=${param.value}`).join('&')
    let url = `${this.baseUrl}${endpoint}?${urlParams}`
    this.params = this.params.filter((param) => param.key === 'apiKey')

    return url;
  }
}

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  urlBuilder:ApiUrl = new ApiUrl()
  apiKey:string = environment.apiKey
  country:string = 'pt'
  pageSize:number = 50
  
  constructor(private http:HttpClient) { }

  getTopHeadLinesByCategory(category:string):Observable<any>{
    this.urlBuilder.addParam('pageSize', this.pageSize)
    if(category != null){
      this.urlBuilder.addParam('category', category)
    }
    let result = this.http.get<any>(this.urlBuilder.getEndpoint('top-headlines'))
    return result
  }

  getSources(topic:string):Observable<Source>{
    this.urlBuilder.addParam('language', 'pt')
    this.urlBuilder.addParam('country', 'br')
    let result = this.http.get<Source>(this.urlBuilder.getEndpoint('top-headlines/sources'))
    return result
  }
}
