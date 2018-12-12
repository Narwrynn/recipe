import React from 'react';
import {Link} from 'react-router-dom';

const Recipes = (props) => (
    <div className="recipes">
        {props.recipes.map((recipe) => {
            return (
                <div key={recipe.recipe_id} className="recipe-card">
                    <img src={recipe.image_url} alt={recipe.title} />
                    <h2>{recipe.title.length < 30 ? `${recipe.title}` : `${recipe.title.substring(0,25)}...`}</h2>
                    <button>
                        <Link to={{
                            pathname: `/recipe/${recipe.recipe_id}`,
                            state: { recipe }
                        }}>
                            View Recipe
                        </Link>
                    </button>
                </div>
            )
        })}
    </div>
);

export default Recipes;