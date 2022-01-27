import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import Query from "../../../Control/Query";
import RecipeNav from "./RecipeNav";
import IngredientPage from "./IngredientPage";
import StepPage from "./StepPage";

class RecipeView extends Component{
    constructor(props){
        super(props)
        this.state = {page: "Ingredients", loading: true}
        this.data
        Query.fetchData(this.props.name).then((response) => this.loadData(response)).catch(e => console.log(e))
        this.navigate = this.navigate.bind(this)
    }

    loadData(response){
        if(response)this.data = JSON.parse(response)
        else this.data = {name: "N/A", ingredients: ["N/A"], steps: ["N/A"]}
        this.setState({loading: false})
    }
    navigate(destination){
        this.setState({page: destination})
    }
    render(){
        return (
            <>
                <RecipeNav backHandler={this.props.backHandler} navigate={this.navigate}></RecipeNav>
                {(this.state.loading) ? <ActivityIndicator></ActivityIndicator> : this.renderPage()}
                
            </>
        
        );
    }
    renderPage(){
        if(this.state.page === "Ingredients") return <IngredientPage list={this.data.ingredients}></IngredientPage>
        else return <StepPage steps={this.data.steps}></StepPage>
    }
}

export default RecipeView;