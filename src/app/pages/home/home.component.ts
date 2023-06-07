import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  topic:string = 'general'
  constructor(private newsApi:NewsApiService){}

  ngOnInit(): void {
    this.newsApi.getTopHeadLinesByCategory(this.topic).subscribe({
      next: (response) => console.log(response),
      error: (err) => console.log(err)
    })
     this.newsApi.getSources(this.topic).subscribe({
       next: (response) => console.log(response),
       error: (err) => console.log(err)
     })
  }
}
