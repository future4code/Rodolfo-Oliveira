import React from "react"
import { Button } from "@material-ui/core"
import useProtectedPage from "../../hooks/useProtectedPage"

const AddRecipesPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>AddRecipesPage</h1>
        </div>
    )
}
export default AddRecipesPage