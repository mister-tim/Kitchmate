import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import ConfirmButtons from "../../Shared/Buttons/ConfirmButtons";

class DeleteModal extends Component{
    constructor(props){
        super(props)
        this.handleAccept = this.handleAccept.bind(this)
    }

    handleAccept(){
        this.props.handleAccept(this.props.recipe, this.props.handleCancel)
    }
    render(){
        return(
            <View style={styles.body}>
                <Text style={styles.text}>Really delete {this.props.recipe}?</Text>
                <ConfirmButtons handleAccept={this.handleAccept} handleCancel={this.props.handleCancel}></ConfirmButtons>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        top: '25%',
        height: Dimensions.get('window').height/4,
        backgroundColor: "#63A46C",
        margin: 5,
        padding: 5,
        borderWidth: 2,
        borderColor: "#000100"
    },
    buttons:{
        flex: 1,
        flexDirection: "row",
        alignContent:"space-between"
    },
    button_single:{
        flex: 1,
        alignSelf: 'center'
    },
    text:{
        color: "#000100",
        fontSize: 18,
        textDecorationLine: 'underline',
        fontWeight: '400',
        alignSelf: 'center',
        flex: 1
    }
})

export default DeleteModal;