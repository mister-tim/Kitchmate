import React, {Component} from "react";
import { 
    Text,
    View,
    StyleSheet
} from "react-native";

class CancelButton extends Component{
    constructor(props){
        super(props)
    }

    closeModal(){
        this.props.handlePress(false)
    }
    render(){
        return(
            <>
            <Text style={styles.button} onTouchEnd={() => this.closeModal()}>&#10060;</Text>
            </>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        alignSelf: 'center',
        fontSize: 30
    }
})

export default CancelButton;