import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import PageButton from "./PageButton";
import BackButton from "./BackButton";

class RecipeNav extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.navbar}>
                <PageButton navigate={this.props.navigate} content={"Ingredients"}></PageButton>
                <BackButton navHandler={this.props.backHandler}></BackButton>
                <PageButton navigate={this.props.navigate} content={"Steps"}></PageButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
 navbar: {
    flexDirection: 'row',
 }
})

export default RecipeNav;