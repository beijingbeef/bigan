import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Category } from '../category.model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[]  = [];
  categoryName: string = '';
  http: Http = null;

  constructor(http: Http) {
    this.http = http;
    this.loadCategories();
  }

  loadCategories() {
    this.http.get('http://localhost:3000/api/categories')
    .map( (res) => {
      return res.json();
    }).subscribe( (categories) => {
      this.categories = [];
      categories.forEach( (category) => {
        this.categories.push( new Category(category.id, category.name) );
      })
    });
  }

  newCategory() {
    this.http.put('http://localhost:3000/api/categories', {
      name: this.categoryName
    }).subscribe( (res) => {
      this.categoryName = '';
      this.loadCategories();
    });
  }

  deleteCategory(category: Category) {
    this.http.delete(`http://localhost:3000/api/categories/${category.id}`)
    .subscribe( (res) => {
      this.loadCategories();
    });
  }

  ngOnInit() {
  }

}
