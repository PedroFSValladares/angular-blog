import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/apiTypes';
import { NewsApiService } from 'src/app/services/news-api.service';
import Article from '../../../assets/data/news.json'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  sectionLilit:number = 3
  categories:string[] = [
    'health',
    'politics',
    'sports',
    'business',
    'tourism'
  ]
  categorySections:{
    category:string
    title:string
    news:News[]
  }[] = []
  mainSection:{
    category:string
    title:string
    news:News[]
  } = {category: '',title: '',news: []}
  otherSection:{
    category:string
    title:string
    news:News[]
  } = {category: '',title: '',news: []}

  constructor(private newsApi:NewsApiService){}

  ngOnInit(): void {
    this.newsApi.getGeneral().subscribe((response) => {
      let mainArticles:News[] = response.results.filter(article => article.category[0] === 'top')
      let otherArticles:News[] = response.results.filter(article => article.category[0] !== 'top')
      this.mainSection = {
        category: 'top',
        title: 'Principais Notícias',
        news: mainArticles
      }
      this.otherSection = {
        category: '',
        title: 'Outras Notícias',
        news: otherArticles
      }
    })
    
    /*
    this.categories.forEach((category) => {
      this.newsApi.getByCategory(category).subscribe((response) => {
        this.otherSections.push({
          category: category,
          title: category,
          news: response.results
        })
      })
    })
    */

   /*
    this.otherSections.push({
      category: 'teste',
      title: 'teste',
      news: [Article,Article,Article]
    })
    this.otherSections.push({
      category: 'teste',
      title: 'teste',
      news: [Article,Article,Article]
    })
    this.otherSections.push({
      category: 'teste',
      title: 'teste',
      news: [Article,Article,Article]
    })
    this.mainSection = {
      category: 'teste',
      title: 'teste',
      news: [Article,Article,Article,Article]
    }
    this.popularSection = {
      category: 'teste',
      title: 'teste',
      news: [Article,Article,Article,Article]
    }
    */
  }
}
