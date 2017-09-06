import { Injectable,EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import  {Ingredient} from '../shared/ingredient.model';
@Injectable()
export class RecipeService {

	recipeSelected= new EventEmitter<Recipe>();

		private recipes: Recipe [] = [
		new Recipe (
			'Butter Paneer Recipe' ,
			'A rich tomato and cashew based gravy with butter fried paneer chunks. Serve this dish of butter paneer with steamed rice or hot rotis!', 
			'http://www.ndtv.com/cooks/images/butter-panner_620.jpg',
			[
				new Ingredient('Paneer',250 ),
				new Ingredient('Tomatoes',6 ),
				new Ingredient('Kaju ',15 ),
				new Ingredient('Garlic',6 ),
				new Ingredient('Butter',2 ),
				new Ingredient('Sugar',1 )
			]
			),
		new Recipe (
			'Whole Wheat Pasta' ,
			'Chef Ritu Dalmia cooks a delicious whole wheat pasta with mushrooms and white wine.',
			 'http://www.ndtv.com/cooks/images/whole.wheat.pasta.in.mushroom.jpg',
			 [
				new Ingredient('fresh mushroom-sliced',100 ),
				new Ingredient('chopped onion',1 ),
				new Ingredient('clove garlic ',1 ),
				new Ingredient('white wine', 1 )
			]
			)
		
	];

  constructor() { }

  getRecipes(){
  	return this.recipes.slice();
  }

}
