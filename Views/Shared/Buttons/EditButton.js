import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet
} from 'react-native';

class EditButton extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.button} >
                <Text onTouchEnd={() => this.props.handlePress()}>&#9999;</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#0A369D",
        margin: 2,
        marginRight: 5,
        alignSelf: 'center'
    }
})

export default EditButton;