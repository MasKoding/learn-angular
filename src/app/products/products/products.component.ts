import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 products:Products[] = [
   {
   'id':'102',
   'name':'pencil',
   'price':3000,
   'stock':300
  },
  {
    'id':'103',
    'name':'book',
    'price':5000,
    'stock':300
   },
]



  constructor() { }

  ngOnInit(): void {
  }

}

export class Products{
  'id': string;
  'name': string;
  'price': number;
  'stock': number;
}
