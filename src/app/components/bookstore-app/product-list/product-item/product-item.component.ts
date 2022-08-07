import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

@Input() livro?: Book;
// ={
//   id: '',
//   name:'',
//   price:0.00,
//   quantity:0,
//   category:'',
//   img:''
// };

  constructor() { }

  ngOnInit(): void {
  }

}
