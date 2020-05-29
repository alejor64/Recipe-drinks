import React, { useContext, useState } from 'react'
import {CategoryContext} from '../context/Category'
import {RecipiesContext} from '../context/Recipies'

const Form = () => {

    const [search, setSearch] = useState({
        name: '',
        category: ''
    })

    const { categories } = useContext(CategoryContext)
    const { error, setSearchRecipies, setConsult } = useContext(RecipiesContext)

    const getDataRecipe = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const callAPIRecipies = (e) => {
        e.preventDefault()
        setSearchRecipies(search)
        setConsult(true)
    }

    return (
        <form
            className="col-12"
            onSubmit={callAPIRecipies}
        >
            <fieldset className="text-center">
                <legend>Search Drinks by Category or Ingredient</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Search by Ingredient"
                        onChange={getDataRecipe}
                    />
                </div>
                <div className="col md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={getDataRecipe}
                    >
                        <option value="">-- Select by Category --</option>
                        {
                            categories.map(category => (
                                <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-danger"
                        value="Search Recipes"
                    />
                </div>
            </div>
            {
                error && <p className="alert alert-primary mt-4 text-center"> Select a Category Please</p>
            }
        </form>
    )
}

export default Form
