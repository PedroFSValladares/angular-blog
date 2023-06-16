import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SectionComponent } from './components/section/section.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticleContentComponent } from './components/article-content/article-content.component';
import { HeaderComponent } from './components/article-header/header.component';
import { FooterComponent } from './components/article-footer/footer.component';
import { SmallArticleComponent } from './components/small-article/small-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    MenuBarComponent,
    SectionComponent,
    ArticleCardComponent,
    ArticleContentComponent,
    HeaderComponent,
    FooterComponent,
    SmallArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
