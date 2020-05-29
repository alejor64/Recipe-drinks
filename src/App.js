import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import ListRecipies from './components/ListRecipies'

import CategoryProvider from './context/Category'
import RecipiesProvider from './context/Recipies'
import ModalProvider from './context/Modal'

function App() {
  return (
    <CategoryProvider>
      <RecipiesProvider>
        <ModalProvider>
          <Header/>
          <div className="container mt-5">
            <div className="row">
              <Form/>
            </div>
            <ListRecipies/>
          </div>
        </ModalProvider>
      </RecipiesProvider>
    </CategoryProvider>
  );
}

export default App;
