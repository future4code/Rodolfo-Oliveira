import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import { BASE_URL } from "../../constants/urls"
import { RecipeListContainer, AddRecipeButton } from './styled'
import { Add } from "@material-ui/icons"
import { goToAddRecipes, goToRecipesDetail } from "../../routes/coordinator"
import { useHistory } from "react-router"
import Loading from "../../components/Loading/Loading"

const RecipesListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const onClickCard = (id) => {
        goToRecipesDetail(history, id)

    }
    const recipes = useRequestData([], `${BASE_URL}recipe/feed`)
    console.log(recipes)

    const recipesCards = recipes.map((recipe) => {
        return (
            <RecipeCard
                key={recipe.recipe_id}
                title={recipe.title}
                image={recipe.image}
                onClick={() => onClickCard(recipe.recipe_id)}    
        />)
    })

    return (
        <RecipeListContainer>
            {recipesCards.length > 0 ? recipesCards : <Loading/>}
            <AddRecipeButton
                color={"primary"}
                onClick={() => goToAddRecipes(history)}
            >
            <Add/>
            </AddRecipeButton>
        </RecipeListContainer>
    )
}

export default RecipesListPage