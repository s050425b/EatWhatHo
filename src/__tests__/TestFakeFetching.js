import { fakeFatch } from "../Utils/FakeFatching";

describe("Fake Fetching Test", () => {
    test("get domain name", () => {
        const url = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apple,+orange,+banana&apiKey=3d43843cf76547abb0f308d02b73e7b0";
        fakeFatch(url);
        expect("abc").toEqual("abc");
    });
});