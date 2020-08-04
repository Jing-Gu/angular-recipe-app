import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Filet Mignon', 'best beef', 'https://sifu.unileversolutions.com/image/en-SA/recipe-topvisual/2/1260-709/filet-mignon-with-garlic-rosemary-sauce-50235905.jpg'),
    new Recipe('Ratatouille', 'food for mouse', 'https://i8.amplience.net/i/traeger/20170803_Smoked-Ratatouille_RE_HE_M?w=1200&sm=aspect&aspect=2:1&scaleFit=poi&$poi2$')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
