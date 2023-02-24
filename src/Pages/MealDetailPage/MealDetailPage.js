import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Spoonacular from "../../Utils/Spoonacular";
import { MealDetail } from "../../Components/MealDetail/MealDetail";

export function MealDetailPage() {
    const { state } = useLocation();
    const [mealObj, setMealObj] = useState();

    useEffect( () => {
        async function fetchMealObj() {
            let returnObj =  await Spoonacular.searchMealDetail(state.id);
        
            console.log(returnObj);

            setMealObj({
                name: returnObj.title,
                duration: returnObj.cookingMinutes,
                image: returnObj.image,
                source: returnObj.sourceUrl,
                healthScore: returnObj.healthScore,
                ingredArr: returnObj.extendedIngredients,
                dishTypes: returnObj.dishTypes
            });
        }
        fetchMealObj();
    }, []);

    if (!state) {
        return (
        <div className="MealDetail">No search result</div>
        );
    } else if (!mealObj) {
        return (
            <div className="MealDetail">Loading</div>
        );
    }

    return (
        <div className="MealDetailPage">
            <MealDetail id={state.id} name={mealObj.name} duration={mealObj.duration} image={mealObj.image} source={mealObj.source} healthScore={mealObj.healthScore} ingredArr={mealObj.ingredArr} dishTypes={mealObj.dishTypes} />
        </div>
    );
}