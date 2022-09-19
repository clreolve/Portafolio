import { Component, OnInit } from '@angular/core';

//servicios
import { ProductsrandomService } from '../services/productsrandom.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  constructor(private ProductsrandomService:ProductsrandomService) { }

  ngOnInit(): void {
  }

}
