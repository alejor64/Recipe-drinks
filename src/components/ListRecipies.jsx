import React, {useContext} from 'react'
import {RecipiesContext} from '../context/Recipies'
import Recipe from './Recipe'

const ListRecipies = () => {

    const { recipies } = useContext(RecipiesContext)

    return (
        <div className="row mt-5">
            {
                recipies.map(recipe => (
                    <Recipe
                        key={recipe.idDrink}
                        recipe={recipe}
                    />
                ))
            }
        </div>
    )
}

export default ListRecipies
