import React from "react"
import { InputsContainer } from "./styled"
import { TextField, CircularProgress } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core"
import { SignUpFormContainer } from "./styled"
import { signUp } from "../../services/user"
import { useHistory } from "react-router"
import { useState } from "react"

const SignUpForm = ({setRightButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText, setIsLoading)
    }
    return (
        <SignUpFormContainer>
            <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    require
                    type={"password"}
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    margin={"normal"}
                >
                {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Cadastrar-se</>}
                </Button>
            </form>
            </InputsContainer>
        </SignUpFormContainer>
    )
}

export default SignUpForm