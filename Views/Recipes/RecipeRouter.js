import React, {Component} from "react";
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Recipes from "./RecipeList/Recipes";
import RecipeEditor from "./RecipeEditor/RecipeEditor";
import RecipeView from "./RecipeDisplay/RecipeView";
import HomeButton from "../Shared/Buttons/HomeButton";


class RecipeRouter extends Component{
    constructor(props){
        super(props)
        this.state = { locale: "List", item: null}
        this.navHandler = this.navHandler.bind(this)
        this.routes = {
            List: <Recipes viewHandler={this.navHandler} editHandler={this.navHandler} addHandler={this.navHandler}></Recipes>,
            View: null,
            Edit: null
        }
    }

    editHandler(content){
        this.routes["Edit"] = React.createElement(RecipeEditor, {backHandler: this.navHandler, name: content})
    }
    navHandler(destination, item){
        if(destination === "Edit") this.editHandler(item)
        else if(destination === "View") this.viewHandler(item)
        this.setState({item: item, locale: destination})
    }
    render(){
        return(
            <View style={styles.view}>
                <HomeButton navHandler={this.props.navHandler}></HomeButton>
                {this.routes[this.state.locale]}
            </View>
        );
    }
    viewHandler(content){
        this.routes["View"] = React.createElement(RecipeView, {backHandler: this.navHandler, name: content})
    }
}

const styles = StyleSheet.create({
    view:{
        flex: 1
    }
})
export default RecipeRouter;