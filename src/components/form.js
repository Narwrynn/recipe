import React from 'react';

const Form = props => (
    <form className="search-form" onSubmit={props.getRecipe}>
        <input type="text" name="recipeName"/>
        <button>Search <i className="fas fa-search mag-glass"></i></button>
    </form>
);

export default Form;
