import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Filet Mignon',
      'best beef',
      'https://sifu.unileversolutions.com/image/en-SA/recipe-topvisual/2/1260-709/filet-mignon-with-garlic-rosemary-sauce-50235905.jpg'
    ),
    new Recipe(
      'Ratatouille',
      'food for mouse',
      'https://i8.amplience.net/i/traeger/20170803_Smoked-Ratatouille_RE_HE_M?w=1200&sm=aspect&aspect=2:1&scaleFit=poi&$poi2$'
    ),
  ];

  getRecipes() {
    //slice() returns a new array, avoid modifying private recipes from outside
    return this.recipes.slice();
  }
}
