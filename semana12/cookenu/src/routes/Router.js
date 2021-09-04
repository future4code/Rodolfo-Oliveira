import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import RecipesDetailPage from "../pages/RecipesDetailPage/RecipesDetailPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage.Js";
import Header from "../components/Header/Header";


const Router = ({ rightButtonText, setRightButtonText }) => {
    return (
            <Switch>
                <Route exact path ="/login">
                <LoginPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
                </Route>
                <Route exact path ="/SignUp">
                <SignUpPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route exact path ="/AddRecipes">
                    <AddRecipesPage/>
                </Route>
                <Route exact path ="/">
                    <RecipesListPage/>
                </Route>
                <Route exact path ="/RecipesDetail/:id">
                    <RecipesDetailPage/>
                </Route>
                <Route >
                    <ErrorPage/>
                </Route>
            </Switch>
    )

}

export default Router