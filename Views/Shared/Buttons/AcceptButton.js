import React, {Component} from "react";
import { 
    Text,
    View,
    StyleSheet
} from "react-native";

class AcceptButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <Text style={styles.button} onTouchEnd={() => this.props.handlePress()}>&#9989;</Text>
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

export default AcceptButton;