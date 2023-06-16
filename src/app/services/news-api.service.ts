import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Source, ApiResponse, News } from '../models/apiTypes';

class ApiUrl{
  baseUrl:string = environment.apiBaseUrl
  params:{key:string, value:string|number}[] = []

  addParam(newKey:string, newValue:string|number){
    this.params.push({key: newKey, value: newValue})
  }

  getUrl():string{
    this.addParam('country', 'us,br')
    this.addParam('language', 'en,pt')
    this.addParam('apiKey', environment.apiKey)
    
    let urlParams = this.params.map((param) => `${param.key}=${param.value}`).join('&')
    let url = `${this.baseUrl}?${urlParams}`
    this.params = this.params.filter((param) => param.key === 'apiKey')

    return url;
  }
}

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey:string = environment.apiKey
  country:string = 'br'
  language:string = 'pt'
  pageSize:number = 50
  
  constructor(private http:HttpClient) { }
  
  getByCategory(category:string):Observable<ApiResponse>{
    let urlBuilder:ApiUrl = new ApiUrl()
    urlBuilder.addParam('category', category)
    
    
    let result = this.http.get<ApiResponse>(urlBuilder.getUrl())
    return result
  }

  getGeneral():Observable<ApiResponse>{
    let urlBuilder:ApiUrl = new ApiUrl()

    let result = this.http.get<ApiResponse>(urlBuilder.getUrl())
    return result
  }
}
