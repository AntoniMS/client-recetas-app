import { InterIngredients} from "../../ingredients/models/ingredient";

export interface InterRecipes {
    name: string;
    nation: string;
    description: string;
    kcal: number;
    img?: string;
    ingredients: InterIngredients[];
}