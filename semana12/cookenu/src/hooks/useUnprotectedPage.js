import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToRecipesList } from '../routes/coordinator'

export const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToRecipesList(history)
    }
  }, [history])
}

