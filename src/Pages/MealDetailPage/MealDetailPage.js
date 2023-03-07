import React, {useEffect, useState} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Spoonacular from "../../Utils/Spoonacular";
import { MealDetail } from "../../Components/MealDetail/MealDetail";
import "./MealDetailPage.css";
import { useDispatch, useSelector } from "react-redux";
import { loadFalse, loadTrue } from "../../Global_state/Loading/LoadingSlice";
import { addRecipe, removeRecipe } from "../../Global_state/SavedRecipe/SavedRecipeSlice";
import { isRecipeSaved } from "../../Global_state/SavedRecipe/SavedRecipeSelector";
import { RecipeComment } from "../../Components/RecipeComment/RecipeComment";

export function MealDetailPage() {
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    const { id } = useParams();
    const [mealObj, setMealObj] = useState();
    const isSaved = useSelector(isRecipeSaved(id));

    useEffect( () => {
        async function fetchMealObj() {
            dispatch(loadTrue());
            let returnObj =  await Spoonacular.searchMealDetail(id);
            setMealObj(returnObj);
            dispatch(loadFalse());
        }
        fetchMealObj();
    }, []);


    if (!id) {
        return (
        <div className="MealDetailPage">No search result</div>
        );
    } else if (!mealObj) {
        return (
            <div className="MealDetailPage">Loading</div>
        );
    }

    function onClickSave() {
        if (isSaved) {
            dispatch(removeRecipe(mealObj.id));
        } else {
            dispatch(addRecipe(mealObj.id));
        }
        
    }

    return (
        <div className="MealDetailPage">
            <Link to={`/meal/${id}`} className={pathname.includes("comment")? "PageBtn" : "PageBtn active"}>Recipe</Link>
            <Link to={`/meal/${id}/comment`} className={pathname.includes("comment")? "PageBtn active" : "PageBtn"}>Comment</Link>
            {
                !pathname.includes("comment")? 
                <MealDetail 
                id={id} 
                name={mealObj.title} 
                duration={mealObj.cookingMinutes} 
                image={mealObj.image} 
                source={mealObj.sourceUrl} 
                healthScore={mealObj.healthScore} 
                ingredArr={mealObj.ingredients} 
                dishTypes={mealObj.dishTypes} 
                rating={mealObj.rating} 
                onClickSave={onClickSave}
                isSaved={isSaved}
                /> :
                <RecipeComment />
            }
        </div>
    );
}