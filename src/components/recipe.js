import React from 'react';

const API_KEY = 'f499c3e4b8e011266046427d8f2090c5';
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';


class Recipe extends React.Component{
    getRecipe = async () =>{
        let reqId = this.props.match.params.id;
        const url = `${corsAnywhere}https://www.food2fork.com/api/get?key=${API_KEY}&rId=${reqId}`;
        const apiCall = await fetch(url);
        const data = await apiCall.json();
        console.log(reqId);
        this.setState({recipes: data.recipes});
    }
    
    
    componentWillMount = () => {
        if(!this.props.location.state){
           this.getRecipe();
        }else{
            this.setState(this.props.location.state);
        }
    }

    
    render(){
        console.log(this.props);
        return (
            <div>
                
            </div>
        )
    }
}

export default Recipe;