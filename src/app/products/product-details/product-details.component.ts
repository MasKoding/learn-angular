import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:any;

  constructor(private activateRoute:ActivatedRoute) {
    this.id = this.activateRoute.snapshot.params.id;
   }

  ngOnInit(): void {
  }

}
