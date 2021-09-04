import React from "react"
import { ScreenContainer, InputsContainer, SignUpButtonContainer, LogoImage } from "./styled"
import logo from "../../assets/logo.png"
import { Button } from '@material-ui/core';
import LoginForm from "./LoginForm"
import { useHistory } from "react-router"
import { goToSignUp } from "../../routes/coordinator"
import {useUnprotectedPage} from "../../hooks/useUnprotectedPage"
 
const LoginPage = ({rightButtonText, setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                Ainda não tem um Usuario? cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage