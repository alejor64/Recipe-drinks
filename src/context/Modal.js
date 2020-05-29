import React, { createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [idRecipe, setIdRecipe] = useState(null)
    const [recipeDrink, setRecipeDrink] = useState({})

    useEffect(()=>{
        if(idRecipe){
            const getRecipeById = async () =>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`
                const recipeById = await axios.get(url)
    
                setRecipeDrink(recipeById.data.drinks[0])
            }
            getRecipeById()
        }
    },[idRecipe])

    return(
        <ModalContext.Provider
            value={{
                recipeDrink,
                setRecipeDrink,
                setIdRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider