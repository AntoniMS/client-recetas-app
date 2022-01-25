import { InterIngredients } from "src/app/features/ingredients/models/ingredient";
import { InterRecipes} from "src/app/features/recipes/models/recipe";

export interface InterUser {
    name: String;
    email: String;
    password: String;
    emoji: String;
    ingredients?: InterIngredients[];
    recipes?: InterRecipes[];
    
}
export interface registerStatus{
    status: 'login' | 'signup' | '';
}