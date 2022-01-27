import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

class PageButton extends Component{
    constructor(props){
        super(props)
        this.handlePress = this.handlePress.bind(this)
    }

    handlePress(){
        this.props.navigate(this.props.content)
    }
    render(){
        return(
            <View style={styles.button}>
                <Text style={styles.button_text} onTouchEnd={() => this.handlePress()}>{this.props.content}</Text>
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

export default PageButton;