import React, {Component} from "react";
import { 
    Text,
    View,
    StyleSheet
} from "react-native";

class ErrorMessage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Text style={styles.error}>{this.props.message}</Text>
        );
    }
}

const styles = StyleSheet.create({
    error:{
        zIndex: 2,
        color: "#BB3333",
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center'
    }
})

export default ErrorMessage;