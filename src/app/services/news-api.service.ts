import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Source } from '../models/source';

class ApiUrl{
  baseUrl:string = environment.apiBaseUrl
  params:{key:string, value:string}[] = []

  addParam(newKey:string, newValue:string){
    this.params.push({key: newKey, value: newValue})
  }

  getEndpoint(endpoint:string):string{
    this.addParam('apiKey', environment.apiKey)
    
    let final = this.params.map((param) =>  `${param.key}=${param.value}`).join('&')

    return `${this.baseUrl}${endpoint}?${final}`
  }
}

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  baseUrl:string = ''
  apiKey:string = environment.apiKey
  country:string = 'pt'
  pageSize:number = 50
  
  constructor(private http:HttpClient) {
    this.baseUrl = environment.apiBaseUrl
  }

  getTopHeadLinesByCategory(category:string):Observable<any>{
    let result = this.http.get<any>(`${this.baseUrl}top-headlines?sources=globo&pageSize=${this.pageSize}&apiKey=${this.apiKey}`)
    return result
  }

  getSources(topic:string):Observable<Source>{
    let result = this.http.get<Source>(`${this.baseUrl}top-headlines/sources?language=pt&country=br&apiKey=${this.apiKey}`)
    return result
  }
}
