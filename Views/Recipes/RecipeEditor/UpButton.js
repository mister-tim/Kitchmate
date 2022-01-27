import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet
} from 'react-native';

class UpButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <Text style={styles.button} onTouchEnd={() => this.props.handlePress()}>&#708;</Text>
            </>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        fontSize: 30,
        alignSelf:'center'
    }
})

export default UpButton;