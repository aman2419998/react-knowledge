import React, { useState } from 'react'
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Translate from './components/Translate';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
   {
      title: 'What is React?',
      content: 'React is a Javascript Library.'
   },
   {
      title: 'What is your name?',
      content: 'My name is Aman Gupta.'
   },
   {
      title: 'What is your position in the company?',
      content: 'I am a junior Developer.'
   }
];

const dropdownItems = [
   {
      label: 'The Green Colour',
      value: 'green'
   },
   {
      label: 'The Red Colour',
      value: 'red'
   },
   {
      label: 'The Blue Colour',
      value: 'blue'
   }
]

const App = () => {

   const [ selectedOption, setSelectedOption ] = useState( dropdownItems[ 0 ] );

   return (
      <>
         <Header />
         <div className="ui container">
            <Route path="/" >
               <Accordion items={ items } />
            </Route>
            <Route path='/search' >
               <Search />
            </Route>
            <Route path='/dropdown' >
               <Dropdown
                  label="Select Colour"
                  items={ dropdownItems }
                  selectedOption={ selectedOption }
                  setSelectedOption={ setSelectedOption } />
            </Route>
            <Route path='/translate' >
               <Translate />
            </Route>
         </div>
      </>
   )
}

export default App

