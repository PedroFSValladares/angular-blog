import { Component, Input } from '@angular/core';
import News from '../../../assets/data/news.json'

@Component({
  selector: 'app-small-article',
  templateUrl: './small-article.component.html',
  styleUrls: ['./small-article.component.css']
})
export class SmallArticleComponent {
  @Input() title:string = News.title
  @Input() publishDate:string = News.pubDate
  @Input() topic:string = News.category[0]
  @Input() publishedAt: string = News.pubDate
  @Input() imageUrl:string = News.image_url
}
