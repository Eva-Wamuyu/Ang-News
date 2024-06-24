import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  title = "Categories";

  categories = [
    { path: 'breaking-news', label: 'Breaking News', icon: 'assets/markus-winkler-aId-xYRTlEc-unsplash.jpg' },
    { path: 'business', label: 'Business Articles', icon: 'assets/business.jpg' },
    { path: 'entertainment', label: 'Entertainment Articles', icon: 'assets/yvette-de-wit-NYrVisodQ2M-unsplash.jpg' },
    { path: 'general', label: 'General Articles', icon: 'assets/microsoft-365-oUbzU87d1Gc-unsplash.jpg' },
    { path: 'health', label: 'Health Articles', icon: 'assets/marcelo-leal-k7ll1hpdhFA-unsplash.jpg' },
    { path: 'science', label: 'Science Articles', icon: 'assets/hans-reniers-lQGJCMY5qcM-unsplash.jpg' },
    { path: 'sports', label: 'Sports Articles', icon: 'assets/filip-mroz--WgTWXb4nh4-unsplash.jpg' },
    { path: 'technology', label: 'Technology News', icon: 'assets/Two.jpg' },
    { path: 'world', label: 'World News', icon: 'assets/One.jpg' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
