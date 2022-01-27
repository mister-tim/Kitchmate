import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet
} from 'react-native';

class BackButton extends Component{
    constructor(props){
        super(props)
    }

    navigate(){
        this.props.navHandler("List")
    }
    render(){
        return(
            <View style={styles.button}>
                <Text style={styles.button_text} onTouchEnd={() => this.navigate()}>Return</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0A369D',
        borderColor: "#63A46C",
        padding: 5,
        borderWidth: 2,
        flex: 1
    },
    button_text: {
        color: '#FaFaFa',
        fontSize: 18,
        fontWeight:'400',
        textAlign: 'center'
    }
})

export default BackButton;