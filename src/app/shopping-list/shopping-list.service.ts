import { Injectable } from '@angular/core';
import  {Ingredient} from '../shared/ingredient.model';


@Injectable()
export class ShoppingListService {
	private ingredients :Ingredient[] =[
		new Ingredient('Apple',5),
		new Ingredient('Banana',10)
	];

  constructor() { }

  getIngredients(){
  	return this.ingredients;
  }

  addIngredient(ingredient:Ingredient){
  	this.ingredients.push(ingredient);
  }

}
