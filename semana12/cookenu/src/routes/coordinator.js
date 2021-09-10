export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/SignUp")
}
export const goToAddRecipes = (history) => {
    history.push("/AddRecipes")
}
export const goToRecipesList = (history) => {
    history.push("/")
}
export const goToRecipesDetail = (history, id) => {
    history.push(`/RecipesDetail/${id}`)
}