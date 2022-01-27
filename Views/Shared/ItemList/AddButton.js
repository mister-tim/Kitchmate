import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet
} from 'react-native';

class AddButton extends Component{
    constructor(props){
        super(props)
    }

    handleTouch(){
        this.props.handleTouch(true)
    }
    render(){
        return(
            <View style={styles.add_button} onTouchEnd={() => this.handleTouch()}>
                <Text style={styles.add_button_text}>Add Item</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    add_button:{
        backgroundColor: "#88CBFB",
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        borderColor: "#63A46C",
        borderWidth: 2
    },
    add_button_text:{
        fontSize: 18,
        fontWeight: '400',
        color: "#000100",
        alignSelf: 'center'
    }
})

export default AddButton;