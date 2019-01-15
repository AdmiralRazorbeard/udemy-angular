import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  // Input is used here to get data from outside the component
  @Input() recipe: Recipe;
  // Output is used to listen to this event from outside
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onSelected() {
    this.recipeSelected.emit();
  }
}
