const privateKey = "3d43843cf76547abb0f308d02b73e7b0";

class Spoonacular {
    static async fetchSpoonacular(api, haveParams) {
        const url= haveParams? "https://api.spoonacular.com" + api + "&apiKey=" + privateKey : 
        "https://api.spoonacular.com" + api + "?apiKey=" + privateKey;


        let response = await fetch(url);

        return await response.json();

    }

    static async searchFoodByIngred(ingredArr) {
        let paramStr = "ingredients=" + ingredArr[0];
        for (let i = 1; i < ingredArr.length; i++) {
            paramStr += `,+${ingredArr[i]}`;
        }

        let jsonResponse = await this.fetchSpoonacular("/recipes/findByIngredients?" + paramStr, true);
        let returnArr = [];
        for (let element of jsonResponse) {
            returnArr.push({
                id: element.id,
                name: element.title,
                image: element.image
            });
        }
        return returnArr;
    }

    static async searchMealDetail(id) {
        let jsonResponse = await this.fetchSpoonacular(`/recipes/${id}/information`, false);
        return jsonResponse;
    }
}

export default Spoonacular;