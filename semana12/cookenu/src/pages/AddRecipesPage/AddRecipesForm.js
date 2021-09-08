import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, AddRecipeFormContainer } from './styled'
import useForm from '../../hooks/useForm'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useHistory } from 'react-router'
import axios from 'axios'
import { BASE_URL } from "../../constants/urls"


const AddRecipeForm = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })
    const [isLoading, setIsLoading] = useState(false)
    
    const createRecipe = () => {
        setIsLoading(true)
        axios.post(`${BASE_URL}recipe`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                alert(res.data.message)
                clear()
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                alert(err.response.message)
            })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe()
    }

    return (
        <form onSubmit={onSubmitForm}>
            <AddRecipeFormContainer>
                <InputsContainer>
                    <TextField
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={'Título'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                    <TextField
                        name={"description"}
                        value={form.description}
                        onChange={onChange}
                        label={'Descrição'}
                        variant={'outlined'}
                        fullWidth
                        required
                        margin={'normal'}
                    />
                    <TextField
                        name={"image"}
                        value={form.image}
                        onChange={onChange}
                        label={'Foto'}
                        variant={'outlined'}
                        fullWidth
                        required
                        margin={'normal'}
                    />
                </InputsContainer>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    type={'submit'}
                    fullWidth
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Adicionar Receita</>}
                </Button>
            </AddRecipeFormContainer>
        </form>
    )
}

export default AddRecipeForm
