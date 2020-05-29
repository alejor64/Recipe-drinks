import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const RecipiesContext = createContext()

const RecipiesProvider = (props) => {

    const [recipies, setRecipies] = useState([])
    const [searchRecipies, setSearchRecipies] = useState({
        name: '',
        category: ''
    })
    const [consult, setConsult] = useState(false)
    const [error, setError] = useState(false)
    
    const {name, category} = searchRecipies
    
    useEffect(()=>{
        const getRecipies = async() =>{
            if(consult && (!name.trim() || !category.trim())){
                setError(true)
                console.log('malo')
            } else if (consult){
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
                const recipies = await axios.get(url)
    
                setRecipies(recipies.data.drinks)
                setError(false)
            } 
        }
        getRecipies()
        // eslint-disable-next-line
    },[searchRecipies])

    return(
        <RecipiesContext.Provider
            value={{
                error,
                recipies,
                setSearchRecipies,
                setConsult
            }}
        >
            {props.children}
        </RecipiesContext.Provider>
    )
}

export default RecipiesProvider