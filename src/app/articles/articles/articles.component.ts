import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  article = {
    id:100,
    title:'How to make router & navigation i Angular 8',
    author:'Dimas',
    description:'A complete tutorial about creating router and navigation in the angular 8 web applications '
  }
  constructor() { }

  ngOnInit(): void {
  }

}
