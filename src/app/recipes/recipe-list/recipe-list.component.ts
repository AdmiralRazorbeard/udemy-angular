import { Component, OnInit, EventEmitter, Output } from "@angular/core";

// Import the model
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  // Output is used to listen to this event from outside
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe(
      "A test Recipe",
      "This is a test",
      "https://dish-environment-prod-contentbucket-10u8bszryovz3.s3.amazonaws.com/assets/s3fs-public/styles/content_image_x_large/public/705316_Pumpkin-Pancakes_17036_Dianne.jpg?itok=aAJNFfet"
    ),
    new Recipe(
      "Another Recipe",
      "This is another test",
      "https://dish-environment-prod-contentbucket-10u8bszryovz3.s3.amazonaws.com/assets/s3fs-public/styles/content_image_x_large/public/705316_Pumpkin-Pancakes_17036_Dianne.jpg?itok=aAJNFfet"
    )
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
