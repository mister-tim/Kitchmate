import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet
} from 'react-native';

class DeleteButton extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.button}>
                <Text onTouchEnd={() => this.props.handlePress()}>&#10060;</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#0A369D",
        margin: 2,
        marginLeft: 5,
        alignSelf: 'center'
    }
})

export default DeleteButton;