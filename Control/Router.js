import React, {Component} from "react";
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import RecipeRouter from "../Views/Recipes/RecipeRouter";
import Groceries from "../Views/Groceries/Groceries";
import Home from "../Views/Home/Home";

class Router extends Component{
    constructor(props){
        super(props)
        this.state = { locale: "Home"}
        this.navHandler = this.navHandler.bind(this)
        this.routes = {
            Home: <Home navHandler={this.navHandler}></Home>,
            Groceries: <Groceries navHandler={this.navHandler}></Groceries>,
            Recipes: <RecipeRouter navHandler={this.navHandler}></RecipeRouter>
        }
    }

    navHandler(destination){
        this.setState({locale: destination})
    }
    render(){
        return(
            <View style={styles.view}>
                {this.routes[this.state.locale]}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view:{
        flex: 1
    }
})
export default Router;