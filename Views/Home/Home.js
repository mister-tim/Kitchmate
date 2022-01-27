import React, {Component} from "react";
import{
    StyleSheet,
    Text,
    View,
    Modal
} from 'react-native';
import MenuButton from "./MenuButton";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {modalOpen: false}
    }

    render(){
        return(
            <View style={styles.navigation}>
                <MenuButton destination="Groceries" navigate={this.props.navHandler}></MenuButton>
                <MenuButton destination="Recipes" navigate={this.props.navHandler}></MenuButton>
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    navigation:{
        flex: 1,
        justifyContent: 'center'
    }
})

export default Home;