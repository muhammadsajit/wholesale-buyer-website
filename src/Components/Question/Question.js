import React from 'react';
import './Question.css'


const Question = () => {
    return (
        <div className='question-div'>
            <div className='first-Q'>
              <h1>How to react works</h1>
              <h3><strong>When we create a component in react.js then it show the actual Document Object Model in UI.Constiquently react create Virtual DOM and keeps all the component in it.When we change any component/state/data then react create new Virtual DOM.Then react compare the new Virtual DOM with the previous Virtual DOM.React do this for the check where data or state or component changes.By this way react Update the changes by diff Alogorithm and show the changes component in UI.</strong></h3>
            </div>
            <div className='second-Q'>
               <h1>Props VS State</h1>
               <h3>Props are read only and State changes can be asynchronous.Props can not be modified and State can be modified using this.setState.Props allow  to pass data from one component to other components as an argument and State holds information about the components.Props can be easily access by child component but State cannot  accessed by child components. 	Stateless component can have Props but Stateless components cannot have State.Props make components reusable but State cannot make components reusable.</h3>
            </div>
        </div>
    );
};

export default Question;