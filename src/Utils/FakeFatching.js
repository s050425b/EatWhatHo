import { recipes as FakeRecipes } from "./FakeData";

export const fakeFatch = async(url) => {
    const [ uri, params ] = url.split("?");

    //map params into obj
    let paramObj = {};
    for (let param of params.split("&")){
        let paramSplit = param.split("=");
        paramObj[paramSplit[0]] =  paramSplit[1];
    }

    //route to correct path
    const path = uri.split("/").slice(3);
    let pathStr = "";
    let result;
    for (let e of path) {
        pathStr = pathStr + "/" + e;
    }

    
    for (const pathName in pathJson){
        if (pathStr === pathName) {
           result = pathJson[pathName](paramObj);
           break;
        }
    }

    return new Promise(resolve => {
        setTimeout(() => resolve(result), 1000);
    });
}


function FindByIngredientsMethod(paramObj) {
    const ingredArr = paramObj.ingredients.split(",+");

    let returnArr = [];
    for (let recipe of FakeRecipes) {
        let match = ingredArr.every( ingred => {
            return recipe.ingredients.includes(ingred);
        });

        if (match) {
            returnArr.push(recipe);
        }
    }
    
    return returnArr;
}

function GetInformationMethod(paramObj) {
    for (let recipe of FakeRecipes) {
        if (paramObj.id === recipe.id) {
            return recipe;
        }
    }
}

function GetInformationByArrayMethod(paramObj) {
    const idArr = paramObj.id.split(",+");
    
    let returnArr = [];
    returnArr = FakeRecipes.filter(recipe => {
        return idArr.includes(recipe.id);
    });
    
    return returnArr;
}

const pathJson = {
    "/recipes/findByIngredients" : FindByIngredientsMethod,
    "/recipes/information" : GetInformationMethod,
    "/recipes/information/batch": GetInformationByArrayMethod
}



