import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet
} from 'react-native';

class HomeButton extends Component{
    constructor(props){
        super(props)
    }

    navigate(){
        this.props.navHandler("Home")
    }
    render(){
        return(
            <View style={styles.button}>
                <Text style={styles.button_text} onTouchEnd={() => this.navigate()}>&#8962;</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        backgroundColor: '#0A369D',
        borderRadius: 50,
        borderColor: "#63A46C",
        padding: 5,
        borderWidth: 2,
        margin: 10
    },
    button_text: {
        color: '#FaFaFa',
        fontSize: 18,
        fontWeight:'400',
        textAlign: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    }
})

export default HomeButton;